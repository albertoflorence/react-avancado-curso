// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV !== 'production'
  },
  images: {
    domains: ['localhost', 'res.cloudinary.com']
  }
}

module.exports = withPWA(nextConfig)
