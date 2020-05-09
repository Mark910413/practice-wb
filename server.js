const express = require('express');
const webpack = require('webpack');
const webpackDevMdiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMdiddleware(compiler, {pathPublic: config.output.pathPublic}));

app.listen(3000, (err) => {
  if (!err) {
    console.log('start listen port 3000!');
  }
});