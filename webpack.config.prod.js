const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: ['./docs/index.js'],
  output: {
    path: './docs/build',
    filename: 'bundle.js',
    publicPath: '/build/',
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
      'react-reactions': path.resolve(__dirname, './lib/index.js'),
    },
    extensions: ['.js', '.md', ''],

  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
  ],
}
