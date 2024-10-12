/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // workerThreads: true,
        cpus: 1
    },

    eslint: {
        ignoreDuringBuilds: true,
      },
      typescript: {
        ignoreBuildErrors: true,
      },
};

export default nextConfig;
