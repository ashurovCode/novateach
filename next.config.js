/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './app/image.js',
  },
  basePath: '/novateach',
  assetPrefix: '/novateach/',
  trailingSlash: true,
}

module.exports = nextConfig
