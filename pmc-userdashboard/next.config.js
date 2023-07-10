/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/crypto-wallets",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
