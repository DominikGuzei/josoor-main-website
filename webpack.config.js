import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';
import ImageminPlugin from 'imagemin-webpack-plugin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const IS_STATIC = process.env.PHENOMIC_ENV === 'static';
const IS_MASTER = process.env.CONTEXT === 'production';
const IS_PRODUCTION = IS_MASTER || process.env.NODE_ENV === 'production';
const DEPLOY_URL = IS_MASTER ? (
  JSON.stringify(process.env.URL)
) : (
  JSON.stringify(process.env.DEPLOY_PRIME_URL || 'http://localhost:3333')
);

module.exports = (config) => ({
  devtool: IS_PRODUCTION ? false : 'cheap-module-eval-source-map',
  entry: {
    [config.bundleName]: [
      !IS_STATIC && require.resolve('webpack-hot-middleware/client'),
      !IS_STATIC && require.resolve('react-hot-loader/patch'),
      './App.js'
    ].filter(item => item)
  },
  output: {
    publicPath: '/', // @todo make this dynamic
    path: path.join(process.cwd(), 'dist'),
    filename: IS_STATIC ? 'phenomic/[name].[chunkhash:8].js' : 'phenomic/[name].js',
    chunkFilename: IS_STATIC ? 'phenomic/[name].[chunkhash:8].chunk.js' : 'phenomic/[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [require.resolve('@phenomic/babel-preset')],
          plugins: [
            'transform-object-rest-spread',
            'transform-class-properties',
            'lodash',
            ['react-intl', {
              'messagesDir': './translations/messages/',
              'enforceDescriptions': false,
              'extractSourceLocation': true
            }]
          ]
        }
      },
      {
        test: /\.png$|\.jpg$|\.svg$/,
        loader: 'file-loader',
        options: {
          name: './assets/images/[name]-[hash].[ext]',
        }
      },
      {
        test: /\.global\.scss/,
        loader: ExtractTextPlugin.extract({
          use: (IS_STATIC ? '' : 'style-loader?sourceMap!') +
          'css-loader?sourceMap!' +
          'sass-loader?sourceMap',
        }),
      },
      {
        test: /^((?!\.global).)*\.s?css/,
        loader: ExtractTextPlugin.extract({
          use: (IS_STATIC ? '' : 'style-loader?sourceMap!') +
          'css-loader?sourceMap&importLoaders=1&modules&localIdentName=[name]_[local]!' +
          'sass-loader?sourceMap',
        })
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        CONTEXT: JSON.stringify(process.env.CONTEXT || 'development'),
        CMS: JSON.stringify(process.env.CMS || false),
        DEPLOY_URL,
      },
    }),
    new ExtractTextPlugin({
      filename: 'phenomic/[name].[contenthash:8].css',
      disable: !IS_STATIC
    }),
    new OptimizeCssAssetsPlugin(),
    new LodashModuleReplacementPlugin(),
    !IS_STATIC && new webpack.HotModuleReplacementPlugin(),
    IS_PRODUCTION && new webpack.optimize.UglifyJsPlugin(),
    new ImageminPlugin({
      disable: !IS_STATIC,
      plugins: [
        imageminMozjpeg({
          quality: 90,
          progressive: true
        })
      ]
    }),
    process.env.CMS === 'true' ? new CopyWebpackPlugin([
      { from: 'source/cms', to: 'cms' },
    ]) : null
  ].filter(item => item)
});
