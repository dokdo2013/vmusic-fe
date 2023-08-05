/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  // use process.env to get the value of the environment variable
  env: {
    // reference a value in the .env file
    // note: the value is always a string (i.e. wrapped in quotes)
    NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
  },
};

module.exports = nextConfig;
