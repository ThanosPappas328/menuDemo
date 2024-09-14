// next.config.mjs
export default {
  output: 'export',  // Enables static export without running `next export`
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  webpack: (config) => {
    config.optimization.minimize = false;
    return config;
  },
};
