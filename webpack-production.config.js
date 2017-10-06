const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack-base.config.js');
// var OfflinePlugin = require('offline-plugin');

module.exports = Merge(CommonConfig, {
   plugins: [
      new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } }),
   ]
});
