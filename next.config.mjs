// next.config.mjs
export default {
  output: 'export', // Enables static export
  basePath: '/menudemo', // Set the base path to match the GitHub Pages subdirectory
  assetPrefix: '/menudemo/', // Set the asset prefix to match the subdirectory
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Ensures URLs end with a slash, which is useful for static sites
  webpack: (config) => {
    config.optimization.minimize = false;
    return config;
  },
};
