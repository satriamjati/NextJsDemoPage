module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: '/NextJsDemoPage',
  exportPathMap: function () {
      return {
          '/': { page: '/' }
      };
  }
};
