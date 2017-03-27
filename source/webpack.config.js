const path = require('path');
const webpack = require('webpack');
//const ClosureCompilerPlugin = require('webpack-closure-compiler');

module.exports = {
  entry: './components/layout.jsx',
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
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          }, {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.png$/,
        use: [{
          loader: 'url-loader'
        }]
      },
      {
        test: /\.jpg$/,
        use: [{
          loader: 'file-loader'
        }]
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader'
        }]
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader'
        }]
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader'
        }]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader'
        }]
      }
    ]
  },
  plugins: [
    
  ]
}
