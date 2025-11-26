/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'GT Kasm Technologies',
    description: 'The GT store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://alasdairclarkgt.github.io/kasm-registry',
    contactUrl: 'https://alasdairclarkgt.github.io/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
