
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});
const FontelloPlugin = require("fontello-webpack-plugin");
 
module.export = {
    entry: [{
        app: "./src/js/app.js"
    }],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
        publicPath: "/dist"
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    options: {
                        presets: ["env"]
                    }
                }]
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: ["html-loader"]
            },
            {
                test: /\.(png|jpg|gif|jfif)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.html$/,
                exclude: path.resolve(__dirname, "src/index.html"),
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]"
                    }
                }]
            },
                    ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                extractComments: false
            })
        ],
    },
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        // new HtmlWebpackPlugin({
        //     filename: "gold.html",
        //     template: "./src/gold.html",
        //     chunks: ["app"]
        // }),
        // new HtmlWebpackPlugin({
        //     filename: "silver.html",
        //     template: "./src/silver.html",
        //     chunks: ["app"]
        // }),
        // new HtmlWebpackPlugin({
        //     filename: "tips.html",
        //     template: "./src/tips.html",
        //     chunks: ["app"]
        // }),
        // new HtmlWebpackPlugin({
        //     filename: "contact.html",
        //     template: "./src/contact.html",
        //     chunks: ["app"]
        // }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jquery"
        }),
        new FontelloPlugin()

    ]

}