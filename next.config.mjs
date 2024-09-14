// next.config.mjs
export default {
  output: 'export', // Enables static export for GitHub Pages
  basePath: '/menudemo', // Ensure this matches your GitHub repository name
  assetPrefix: '/menudemo/', // This ensures all static files are correctly prefixed
  images: {
    unoptimized: true, // Disables image optimization for GitHub Pages
  },
  trailingSlash: true, // Ensures paths end with a slash, which is often needed for GitHub Pages
};
