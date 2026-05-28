/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repo = '/knowledge-base'

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? repo : '',
  assetPrefix: isProd ? `${repo}/` : undefined,
}

export default nextConfig