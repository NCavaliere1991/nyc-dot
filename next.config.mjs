/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '/public/static'
  },
  assetPrefix: './'
}

export default nextConfig
