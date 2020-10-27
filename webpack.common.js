const webpack = require('webpack')
const path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, './src/main.js'),
  output: {
    filename: 'js/[name]-[hash:8].js',
    path: path.join(__dirname, './dist')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'assets': path.join(__dirname, 'assets'),
      'pages': path.join(__dirname, 'src/pages'),
      'public': path.join(__dirname, 'public'),
      'components': path.join(__dirname, 'src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.less?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:"my vue",
      filename: 'index.html',
      template: 'public/index.html',
      inject: true,
      url:'public/'
    }),
    new VueLoaderPlugin()
  ]
}