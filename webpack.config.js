const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const  CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssSprite = require('postcss-sprites');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
console.log('---------------path--------------------', path.resolve(__dirname, './static/img'));
module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@img': path.resolve(__dirname, './static/img')
    }
  },
  mode: 'development',
  module: {
    rules: [
      { 
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer(['IE 10']),
                postcssSprite(path.resolve(__dirname, './static/img')),
              ]
            }
          }
        ]
      },
      { test: /\.(png|svg|jpg|gif)$/, use: [{loader: 'url-loader', options: {limit: 3 * 1024 }}]},
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'url-loader'
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({title: 'Output Management', template: './public/index.html', filename: 'index.html'}),
    new CopyWebpackPlugin([{from: path.resolve(__dirname, 'static'), to: ''}]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 3000,
    hot: true,
  }
}