import type { NextConfig } from "next";
import { WIDTHS } from "./lib/image-widths.mjs";

const nextConfig: NextConfig = {
  experimental: {
    // Inline the (small) global stylesheet into the HTML so first paint doesn't
    // wait on a separate render-blocking CSS request.
    inlineCss: true,
  },
  images: {
    // Serve pre-sized copies (npm run images) rather than Vercel's on-demand
    // optimizer. srcset candidates match the generated widths exactly.
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    imageSizes: WIDTHS.filter((w) => w < 640),
    deviceSizes: WIDTHS.filter((w) => w >= 640),
  },
  async headers() {
    return [
      {
        // Filenames carry a content hash, so they can be cached for good.
        source: "/sized/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
