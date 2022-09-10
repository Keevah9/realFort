// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     domains: ["images.pexels.com", "lid.zoocdn.com"],
//   },
// };

// module.exports = nextConfig

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["lid.zoocdn.com", "media.istockphoto.com"],
  },
  experimental: {
    forceSwcTransforms: true,
  },
};
