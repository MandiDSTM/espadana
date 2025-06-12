# Stage 1: Building the application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Set environment variables for build
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Debug: Show Next.js version and check files
RUN echo "=== Debug Info ===" && \
    npm list next && \
    ls -la && \
    ls -la app/ || echo "No app directory" && \
    cat next.config.js || echo "No next.config.js found"

# Build the application with verbose output
RUN npm run build -- --debug 2>&1 | tee build.log || (echo "=== Build failed, showing log ===" && cat build.log && exit 1)

# Stage 2: Run the application
FROM node:20-alpine AS runner

WORKDIR /app

# Set environment to production
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=6000

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from build stage
COPY --from=builder /app/public ./public

# Set the correct permission for precompiled files
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 6000

# Command to run the application
CMD ["node", "server.js"]
