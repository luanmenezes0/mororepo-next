const withTM = require('next-transpile-modules')(['app-2']);

const { BLOG_URL } = process.env;

module.exports = withTM({
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/blog',
        destination: `${BLOG_URL}/blog`,
      },
      {
        source: '/blog/:path*',
        destination: `${BLOG_URL}/blog/:path*`,
      },
    ];
  },
});
