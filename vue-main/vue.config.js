
const port = 7099; // dev port

module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    // host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
};
