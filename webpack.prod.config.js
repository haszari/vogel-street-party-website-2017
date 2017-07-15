var ExtractTextPlugin = require("extract-text-webpack-plugin");
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var OfflinePlugin = require('offline-plugin');

var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ss = require('./src/ss_routes');

const extractCss = new ExtractTextPlugin('styles.css');
const extractSass = new ExtractTextPlugin('styles2.css');

module.exports = {

  entry: './src/index',
  output: {
    path: 'build',
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)/,
        loader: 'babel',
        include: __dirname + '/src'
      },
      {
        test: /\.scss$/,
        loader: extractSass.extract(
          'css?sourceMap!sass?sourceMap'
        ),
      },
      {
        test: /\.css/,
        loader: extractCss.extract(
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
        ),
        include: __dirname + '/src'
      },      {
        test: /\.(jpg|png)/,
        loader: 'file-loader?name=/assets/img-[hash:6].[ext]',
        include: __dirname + '/src'
      },
      {
        test: /\.(ico|otf|pdf)/,
        loader: 'file-loader?name=[name].[ext]',
        include: __dirname + '/src/'
      }
    ],
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  plugins: [
    extractSass,
    extractCss,
    new StaticSiteGeneratorPlugin('main', ss.routes, ss),
    new OfflinePlugin(),
    new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } })
  ]
};
