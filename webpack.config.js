import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';

const IS_STATIC = process.env.PHENOMIC_ENV === 'static';
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = (config) => ({
  devtool: IS_PRODUCTION ? 'false' : 'cheap-module-eval-source-map',
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
            require.resolve('react-hot-loader/babel'),
            'transform-object-rest-spread',
            'transform-class-properties',
            'lodash'
          ]
        }
      },
      {
        test: /\.png$|\.jpg$|\.svg$/,
        loader: 'url-loader',
        options: {
          fallback: 'file-loader',
          limit: 50000,
          name: './assets/[name]-[hash].[ext]',
        }
      },
      {
        test: /\.otf$|\.ttf$/,
        loader: 'url-loader',
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
  ].filter(item => item)
});
