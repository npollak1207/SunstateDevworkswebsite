import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Inline the (small) global stylesheet into the HTML so first paint doesn't
    // wait on a separate render-blocking CSS request.
    inlineCss: true,
  },
};

export default nextConfig;
