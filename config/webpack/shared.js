// Note: You must restart bin/webpack-watcher for changes to take effect

var path = require('path');
var glob = require('glob');
var extname = require('path-complete-extname');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractTextPlugin = new ExtractTextPlugin({
  filename: '[name].css',
  allChunks: true
});

module.exports = {
  entry: glob.sync(path.join('..', 'app', 'javascript', 'packs', '*.js*')).reduce(
    function(map, entry) {
      var basename = path.basename(entry, extname(entry));
      map[basename] = entry;
      return map;
    }, {}
  ),

  output: { filename: '[name].js', path: path.resolve('..', 'public', 'packs') },

  module: {
    rules: [
      { test: /.ts$/, loader: 'ts-loader' },
      {
        test: /\.js(.erb)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [ 'latest', { 'es2015': { 'modules': false } } ]
          ]
        }
      },
      { test: /\.html$/, use: 'raw-loader' },
      {
        test: /\.(png|svg|jpg|jpeg|eot|woff2|woff|ttf)$/,
        loader: 'file-loader',
        options: {
          name: '[name]-[hash].[ext]'
        }
      },
      { test: /(\.css|\.scss)$/,
        use: extractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader', 'sass-loader']
        })
      }
    ]
  },

  plugins: [extractTextPlugin],

  resolve: {
    extensions: ['.js', '.ts'],
    modules: [
      path.resolve('../app/javascript'),
      path.resolve('../vendor/node_modules')
    ]
  },

  resolveLoader: {
    modules: [ path.resolve('../vendor/node_modules') ]
  },

  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
}
