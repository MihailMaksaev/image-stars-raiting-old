var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/main'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'stars-raiting.js'
  },
  watch: true,
  
  watchOptions: { 
    aggregateTimeout: 100
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {  
    preLoaders: [ 
      {
        test: /\.js$/,
        loaders: ['eslint'],
        include: [
          path.resolve(__dirname, "src"),
        ],
      }
    ],
    loaders: [
      {
        loader: 'babel?presets[]=es2015',
        include: [
          path.resolve(__dirname, "src"),
        ],
        test: /\.js$/
      },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      },
	  { test: /\.png$/,    loader: "url-loader?limit=10000&minetype=image/png" }
    ]
  },
    postcss: function () {
    return [autoprefixer, precss];
  }
}