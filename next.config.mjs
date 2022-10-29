/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '/public'
  },
  assetPrefix: './'
}

export default nextConfig
