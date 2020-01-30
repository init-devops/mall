var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const TerserJSPlugin = require('terser-webpack-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/app.jsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: '/dist/',
        filename: "js/app.js",
    },
    devServer: {
        port: 8089,
        contentBase: './dist',
    },
    // optimization: {
    //     minimize: true,
    //     minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    // },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: "./src/index.html",
            favicon: "./src/favicon.ico",
        }),
        new MiniCssExtractPlugin({
            // filename: "css/[name].css",
            // chunkFilename: '[id].css',
            filename: 'css/[name].css',
            chunkFilename: 'style.css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.m?(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: "images/[name].[ext]"
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 8192,
                            name: "fonts/[name].[ext]"
                        }
                    }
                ],
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
};
