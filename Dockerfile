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

# Build the application
RUN npm run build

# Debug: Check what was created
RUN echo "=== Build Output Debug ===" && \
    ls -la .next/ && \
    echo "=== Checking standalone ===" && \
    ls -la .next/standalone/ || echo "No standalone directory found" && \
    echo "=== Checking static ===" && \
    ls -la .next/static/ || echo "No static directory found"

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

# Copy public files
COPY --from=builder /app/public ./public

# Copy Next.js build output - with conditional check
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Alternative: If standalone doesn't exist, copy the whole .next
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules

# Change ownership
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 6000

# Command to run the application
CMD ["node", "server.js"]
