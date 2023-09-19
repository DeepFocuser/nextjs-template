/** @type {import("next").NextConfig} */

const nextConfig = {
    images: {},
    experimental: {
        appDir: true,
        // webVitalsAttribution: ['CLS', 'LCP']
    },
    reactStrictMode: true,
};

module.exports = nextConfig;
