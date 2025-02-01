/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    basePath: process.env.NODE_ENV === 'production' ? '/conversor-de-CLT-para-PJ' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/conversor-de-CLT-para-PJ' : ''
}

export default nextConfig;
