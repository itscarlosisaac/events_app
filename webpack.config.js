const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const srcDir = path.resolve(__dirname, 'client');
const distDir = path.resolve(__dirname, 'dist');
const devMode = process.env.NODE_ENV === 'development';

module.exports = ( env ) => {
  const MiniCSSExtract = new MiniCssExtractPlugin({
    filename: "[name].csss",
    chunkFilename: "[id].css"
  });

  const CopyWebpack = new CopyWebpackPlugin([
    {from: path.resolve(srcDir, 'assets'), to: 'assets'},
    {from: path.resolve(srcDir, 'index.html'), to: distDir}
  ]);

  const HMR = new webpack.HotModuleReplacementPlugin();

  return{
    mode: devMode || 'production',
    entry: './client/app.js',
    output: {
      filename: 'app.bundle.js',
      path: distDir
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }, {
          test: /\.(sa|sc|c)ss$/,
          use: [
            !devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [ CopyWebpack, HMR, MiniCSSExtract ],
    devtool: devMode ? 'inline-source-map' : 'source-map',
    devServer: {
      historyApiFallback: true,
      contentBase: distDir,
      watchContentBase: true,
      port: process.env.WEBPACK_SERVER_PORT || 9000
    }
  }
}