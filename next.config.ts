import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // https://nextjs.org/docs/app/api-reference/components/image#remotepatterns
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
