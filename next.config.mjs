/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
            pathname: `/images/${process.env.NEXT_PUBLIC_SANITY}/production/**`
          },
        ],
      },
};

export default nextConfig;
