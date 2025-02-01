/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true 
    },
    basePath: process.env.NODE_ENV === 'production' ? 'https://github.com/F3lipeSouza/conversor-de-CLT-para-PJ ':'', 
    assetPrefix: process.env.NODE_ENV === 'production' ? 'https://github.com/F3lipeSouza/conversor-de-CLT-para-PJ' : ''
  }
  
  module.exports = nextConfig