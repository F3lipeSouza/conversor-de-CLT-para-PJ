/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    compiler:{
        styledComponents:true,
    },
    images: {
        unoptimized: true
    },
    basePath: "/conversor-de-CLT-para-PJ", 
    assetPrefix: "/conversor-de-CLT-para-PJ"}

export default nextConfig;
