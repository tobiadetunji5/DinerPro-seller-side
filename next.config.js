/** @type {import('next').NextConfig} */
const nextConfig = {
    webpackDevMiddleware: (config) => {
        config.watchOptions = {
            ignored: ['**/node_modules', '**/.next/**'],
        };
        return config;
    },
};
module.exports = nextConfig;