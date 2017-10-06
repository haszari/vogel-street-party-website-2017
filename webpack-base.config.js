var ExtractTextPlugin = require("extract-text-webpack-plugin");
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
// var CopyWebpackPlugin = require('copy-webpack-plugin');

var autoprefixer = require('autoprefixer');
var ss = require('./src/ss_routes');

// const extractCss = new ExtractTextPlugin('styles.css');
const extractSass = new ExtractTextPlugin('styles.css');


module.exports = {
  entry: './src/index.jsx',
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
        include: __dirname + '/src',
      },
      {
        test: /\.scss$/,
        loader: extractSass.extract(
          'css?sourceMap!sass?sourceMap'
        ),
      },
      {
        test: /\.(jpg|png|pdf)/,
        loader: 'file-loader?name=/assets/img-[hash:6].[ext]',
        include: __dirname + '/src'
      },
      {
        test: /\.(ico|png|xml|json|svg)/,
        loader: 'file-loader?name=[name].[ext]',
        include: __dirname + '/src/assets/logo-root'
      },
    ],
  },
   postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
   plugins: [
      extractSass,
      new StaticSiteGeneratorPlugin('main', ss.routes, ss),
   ]
};
