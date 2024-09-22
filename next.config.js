/** @type {import('next').NextConfig} */
const TerserPlugin = require("terser-webpack-plugin");

const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dzuzhg8s2/image/upload/**",
      },
    ],
  },
  webpack(config) {
    config.optimization.minimizer = [
      new TerserPlugin({
        terserOptions: {
          output: {
            ascii_only: true,
          },
        },
      }),
    ];
    return config;
  },
};

module.exports = nextConfig;
