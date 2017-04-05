const path = require("path")
const webpack = require("webpack")
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'src'),
        filename: 'main.bundle.js'
    },
    module: {
        loaders: [
            {
                test: '/\.js$/',
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin()
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
    
}