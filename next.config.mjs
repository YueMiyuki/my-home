/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  reactCompiler: true,
  experimental: {
    cssChunking: "strict",
    useCache: true,
    optimizeCss: true,
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
      "@radix-ui/react-dialog",
      "motion/react",
    ],
  },
  compress: true,
};

export default nextConfig;
