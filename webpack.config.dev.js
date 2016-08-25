const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: ['webpack-dev-server/client?http://localhost:2570', 'webpack/hot/dev-server', './docs/index.js'],
  output: {
    path: './docs/build',
    filename: 'bundle.js',
    publicPath: 'http://localhost:2570/docs/build',
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loaders: ['babel'],
      }, {
        test: /\.md$/,
        loaders: ['html-loader'],
      }, {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      'react-reactions': path.resolve(__dirname, './src/index.js'),
    },
    extensions: ['.js', '.md', ''],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({ quiet: true }),
    new webpack.NoErrorsPlugin(),
  ],
  devtool: 'eval',
  quiet: true,
}
