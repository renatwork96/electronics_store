
const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  mode: 'development',
  devServer: {
    open: true,
    hot: true,
    writeToDisk: true,
    port: 8080,
    //contentBase: './dist',
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          },
        },
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()],
};