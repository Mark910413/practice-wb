const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const globby = require('globby');

const getEntry = (exports.getEntry = () => {
  // 异步方式获取所有的路径
  const paths = globby.sync('./pages/*.js', {
      cwd: path.join(__dirname, './src')
  });
  const rs = {};
  paths.forEach(v => {
      // 计算 filename
      const name = path.basename(v, '.js');
      let p = path.join('./src', v);
      if (!p.startsWith('.')) {
          // 转成相对地址
          p = './' + p;
      }

      rs[name] = p;
  });
  return rs;
});
console.log(getEntry());

const getHtmlWebpackPlugins = () => {
  const entries = getEntry();
  return Object.keys(entries).reduce((plugins, filename) => {
      plugins.push(
          new HtmlWebpackPlugin({
              template: `./template/${filename}.html`,
              filename: `${filename}.html`,
              chunks: [filename]
          })
      );
      return plugins;
  }, []);
};

module.exports = {
  entry: getEntry(),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
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
    ...getHtmlWebpackPlugins(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
}