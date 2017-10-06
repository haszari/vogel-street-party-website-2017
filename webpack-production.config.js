const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack-base.config.js');
var OfflinePlugin = require('offline-plugin');

module.exports = Merge(CommonConfig, {
   plugins: [
      new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } }),
      new OfflinePlugin({
         // disable ServiceWorker - it requires https, which we don't have (on GitHub Pages)
         ServiceWorker: false, 
         // network first so people get the latest unless they are offline
         responseStrategy: 'network-first'
      }),
   ]
});
