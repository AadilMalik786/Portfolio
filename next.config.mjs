/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'bcciplayerimages.s3.ap-south-1.amazonaws.com',
            port: '',

          },
        ],
      },
};

export default nextConfig;
