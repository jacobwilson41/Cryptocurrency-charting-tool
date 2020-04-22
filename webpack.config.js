var path = require('path');
var DIST_DIR = path.join(__dirname, '/dist');

module.exports = {
  entry: `./app.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/react'],
        }
      }
    ]
  }
};