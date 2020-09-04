const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const  CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const postcssSprites = require('postcss-sprites');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  resolve: {
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader', { loader: 'postcss-loader', options: {plugins: [postcssSprites()]} }] },
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({dry: true}),
    new HtmlWebpackPlugin({title: 'Output Management', template: './public/index.html', filename: 'index.html'}),
    new CopyWebpackPlugin([{from: path.resolve(__dirname, 'static'), to: ''}]),
  ],
}