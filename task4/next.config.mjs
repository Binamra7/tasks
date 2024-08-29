/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.node = {
            __dirname: true
        };
        return config;
    },
};

export default nextConfig;
