const path = require('path');

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'client', 'public'),
    filename: 'bundle.js',
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
    ],
  },
};
