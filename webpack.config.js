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
        loader: require.resolve('babel-loader'),
        options: {
          babelrc: false,
          presets: [require.resolve('@phenomic/babel-preset')],
          plugins: [
            require.resolve('react-hot-loader/babel'),
            'lodash'
          ]
        }
      },
      {
        test: /\.(?:png|jpg|svg)$/,
        loader: require.resolve('url-loader'),
        options: {
          limit: 50000,
          name: './assets/[name]-[hash].[ext]',
        }
      },
      {
        test: /\.(?:otf|ttf)$/,
        loader: require.resolve('url-loader'),
        options: {
          name: './fonts/[name]-[hash].[ext]',
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
        test: /^((?!\.global).)*\.scss/,
        loader: ExtractTextPlugin.extract({
          use: (IS_STATIC ? '' : 'style-loader?sourceMap!') +
            'css-loader?sourceMap&importLoaders=1&modules&localIdentName=[name]_[local]!' +
            'sass-loader?sourceMap',
        })
      }
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
  ].filter(item => item),

  resolve: {
    // react-native(-web) | react-primitives
    extensions: ['.web.js', '.js', '.json'],
    alias: {
      'react-native': 'react-native-web'
    }
  },

  resolveLoader: {
    alias: {
      'file-loader': require.resolve('file-loader')
    }
  },

  // eslint-disable-next-line max-len
  // https://github.com/facebookincubator/create-react-app/blob/fbdff9d722d6ce669a090138022c4d3536ae95bb/packages/react-scripts/config/webpack.config.prod.js#L279-L285
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
});
