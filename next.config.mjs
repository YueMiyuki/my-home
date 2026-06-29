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
	},
	compress: true,
	sassOptions: {
		quietDeps: true,
	},
};

export default nextConfig;
