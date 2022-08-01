/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['gumlet.assettype.com'],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
}

module.exports = nextConfig
