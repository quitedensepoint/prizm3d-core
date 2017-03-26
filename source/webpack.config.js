var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: { path: path.resolve(__dirname, '../dist'), filename: 'bundle.js' },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["es2017", "react"]
            }
          }
        ]
      }
    ]
  }
}
