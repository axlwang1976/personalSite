/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     template: './src/index.html'
        // }),
        new HtmlWebpackPlugin({
            filename: 'study.html',
            template: './src/study.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'study-detail-04.html',
            template: './src/study-detail-04.html'
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
};
