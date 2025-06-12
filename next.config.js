/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

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
