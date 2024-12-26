/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/{i-Dyke.github.io}' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/{i-Dyke.github.io}' : '',
  }
  
  module.exports = nextConfig