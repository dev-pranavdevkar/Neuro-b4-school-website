/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    // Add webpack configurations here
    // Example: Add a custom alias for directories
    config.resolve.alias['@components'] = path.resolve(__dirname, 'components');

    // Return the modified webpack config
    return config;
  }
}

module.exports = nextConfig;
