/** @type {import('next').NextConfig} */
const nextConfig = {};
// next.config.js
module.exports = {
    output: 'export',
    basePath: '/menudemo', // Replace <repository-name> with your GitHub repo name
    images: {
      unoptimized: true, // Disables image optimization for GitHub Pages
    },
  };
  

export default nextConfig;
