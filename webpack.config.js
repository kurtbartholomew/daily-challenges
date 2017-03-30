const {resolve} = require('path')
const glob = require('glob')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [].concat(glob.sync('./challenges/**/*.js')).concat(glob.sync('./test/**/*.js')),
  output: {
    path: resolve(__dirname, 'public'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loaders: ['eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['public'], {
      'root': resolve(__dirname),
      'verbose': true,
      'exclude': '.gitkeep'
    }),
    new CopyWebpackPlugin([
      { from: 'static' }
    ])
  ]
}
