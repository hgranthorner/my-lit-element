const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'js', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      }
    ]
  }
}
