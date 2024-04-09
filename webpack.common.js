const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  target: 'web',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', 
              ['@babel/preset-react', { runtime: 'automatic' }]
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
        // use: [
        //   devMode ? 'style-loader' : MiniCssExtractPlugin.loader(), 
        //   'css-loader'
        // ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
      }
    ]
  },  
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
  optimization: {
    minimizer: [
      '...',
      new CssMinimizerPlugin(),
    ]
  }
}