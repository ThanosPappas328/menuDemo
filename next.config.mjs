// next.config.mjs
export default {
  output: 'export', // Enables static export for GitHub Pages
  basePath: '/menudemo', // Replace with your GitHub repository name
  assetPrefix: '/menudemo/', // Ensures assets are correctly prefixed
  images: {
    unoptimized: true, // Disables image optimization for GitHub Pages
  },
  trailingSlash: true, // Ensures all paths end with a slash, which is often needed for GitHub Pages
};
