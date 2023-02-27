const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
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
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'LICENSE' },
        { from: 'src/manifest.json' },
        { from: 'src/icons/', to: 'icons/' },
      ],
    }),
  ],
};
