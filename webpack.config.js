const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      { test: /(js|jsx)/,
        loader: "babel-loader",
        exclude: /node_modules/,
      }
    ]
  },
}