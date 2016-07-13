var path = require('path')

var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var dev = process.env.NODE_ENV !== 'production'

var plugins = [ new ExtractTextPlugin('[name].html') ]
if (!dev) {
  plugins.push(new webpack.optimize.UglifyJsPlugin())
  plugins.push(new webpack.optimize.DedupePlugin())
}

var sourcePath = path.resolve(__dirname, 'src')

module.exports = {
  entry: {
    main: './src'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    loaders: [
      { test: /\.js$/, include: [ sourcePath ], loader: 'babel?presets[]=es2015&cacheDirectory' },
      { test: /\.pug$/, include: [ sourcePath ], loader: ExtractTextPlugin.extract('pug-html') },
      { test: /\.md$/, loader: 'html!markdown' },
      {
        test: /\.css$/,
        loader: (
          dev
            ? 'style!css?-minimize&-url!postcss'
            : 'style!css?minimize&-url!postcss'
        )
      }
    ]
  },

  devtool: dev
    ? '#source-map'
    : '',

  plugins: plugins,
  postcss: function () { return [ autoprefixer ] }
}
