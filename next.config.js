/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      // Ensures no server modules are included on the client.
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /createServerEnvironment/,
        })
      );
    }
    return config;
  },

  compiler: {
    reactRemoveProperties: false,
    relay: require("./relay.config"),
  },
};

module.exports = nextConfig;
