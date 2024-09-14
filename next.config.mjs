// next.config.mjs
export default {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  webpack: (config) => {
    config.optimization.minimize = false;
    return config;
  },
};
