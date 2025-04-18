const path = require('path');

module.exports = {
  entry: './src/editor/scripts/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/assets/js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};