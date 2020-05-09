const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.js');
const option = {
  contentBase: './dist',
  compress: true,
  hot: true,
}

WebpackDevServer.addDevServerEntrypoints(config, option);
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, option);

server.listen(3000, (err) => {
  !err && console.log('listen port 3000');
  err && console.log(err);
})