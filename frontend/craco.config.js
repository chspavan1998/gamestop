module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Remove source-map-loader from the rules
      webpackConfig.module.rules = webpackConfig.module.rules.filter(
        rule => !rule.loader?.includes('source-map-loader')
      );
      return webpackConfig;
    },
  },
}; 