const path = require("path")
const webpack = require("webpack")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'main.bundle.js'
    },
    module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { 
          plugins: [
            'transform-runtime'
          ],
          presets: [ 
            'es2015',
            'stage-2'
          ] 
        }
      }
    ]
  },
  plugins: [ 
    new UglifyJsPlugin()
  ]
};