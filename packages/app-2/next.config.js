const withTM = require('next-transpile-modules')(['app-1']);

module.exports = withTM({
  reactStrictMode: true,
  basePath: '/blog',
});
