const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "../dist"),
        library: {
            type: 'umd'
        },
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }, {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: ['ts-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html', // output file
        }),
    ],
}