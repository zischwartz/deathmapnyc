var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
const ModulesCdnWebpackPlugin = require('modules-cdn-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'static/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']
      },
      {
        test: /\.png$/,
        use: ["file-loader"]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
          template: 'src/index.html',
          inject: 'body',
          filename: 'index.html'
    }),
    // new ModulesCdnWebpackPlugin({verbose:true, only: ['react', 'mapbox-gl', 'react-dom', 'react-ga']}),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   comments: false
    // })
  ]
};
