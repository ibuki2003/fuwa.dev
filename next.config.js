/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  experimental: {
    // images: {
    //   unoptimized: true,
    // },
  },

  // optimization: {
  //   minimize: true,
  // },
};

module.exports = nextConfig;
