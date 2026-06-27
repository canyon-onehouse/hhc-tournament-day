import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tree-shake icon imports so dev/build stay fast.
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
};

export default nextConfig;
