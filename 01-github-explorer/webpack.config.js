const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = !isDevelopment;

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        hot: true
    },



    plugins: [
        // This plugin is used to generate the index.html file in the dist folder
        isDevelopment && new ReactRefreshWebpackPlugin(),
        
        new HtmlWebPackPlugin ({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean), // Filter out false values (like the ReactRefreshWebpackPlugin in production)

    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean),
                    }
                } 

            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ],

    }
}