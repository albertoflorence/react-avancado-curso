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
    domains: ['source.unsplash.com', 'i.ibb.co', 'localhost']
  }
}

module.exports = withPWA(nextConfig)
