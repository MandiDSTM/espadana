/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  
  // تنظیمات برای رفع مشکل prerendering
  experimental: {
    serverComponentsExternalPackages: []
  },
  
  // تنظیمات webpack برای محیط serverless
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
        crypto: false,
      };
    }
    return config;
  },
  
  // غیرفعال کردن telemetry
  telemetry: {
    disabled: true
  },

  // تنظیمات برای debugging
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  // تنظیمات برای static files
  async headers() {
    return [
      {
        source: '/downloads/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
