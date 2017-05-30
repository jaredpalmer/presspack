'use strict';

const webpack = require('webpack');
const config = require('./webpack.config');

const clientCompiler = webpack(config);

clientCompiler.watch(
  {
    noInfo: true,
    quiet: true,
  },
  (err, stats) => {
    if (err) return;
  }
);
