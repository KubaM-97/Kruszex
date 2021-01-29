const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: { 
    index: path.resolve(__dirname, "src/js", "app.js") 
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js',
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      filename: 'gold.html',
      template: 'src/gold.html'
    }),
    new HtmlWebpackPlugin({ 
      filename: 'silver.html',
      template: 'src/silver.html'
    }),
    new HtmlWebpackPlugin({ 
      filename: 'tips.html',
      template: 'src/tips.html'
    }),
    new HtmlWebpackPlugin({ 
      filename: 'contact.html',
      template: 'src/contact.html'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jquery"
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/img", to: "img" }
      ],
    }),
    new CleanWebpackPlugin()
  ]
};