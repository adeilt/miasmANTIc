const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const { ProvidePlugin } = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    content: './src/content.jsx',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'LICENSE' },
        { from: 'src/manifest.json' },
        { from: 'src/icons/', to: 'icons/' },
      ],
    }),
    new ProvidePlugin({
      React: 'react',
    }),
  ],
};
