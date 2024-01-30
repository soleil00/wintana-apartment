/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {protocol : "https",
            hostname: "vibe.rw"
            }
        ]
    }
};

module.exports = nextConfig;
