/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: process.env.NEXT_IMAGES_PROTOCOL,
                hostname: process.env.NEXT_IMAGES_HOSTNAME
            }
        ]
    }
};

module.exports = nextConfig;
