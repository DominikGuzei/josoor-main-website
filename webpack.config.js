import path from "path";
import webpack from "webpack";
import ExtractTextPlugin from "extract-text-webpack-plugin";

const IS_STATIC = process.env.PHENOMIC_ENV === "static";
const IS_PRODUCTION = process.env.NODE_ENV === "production";
const nodeModules = path.join(process.cwd(), "node_modules");

module.exports = (config) => {

  if (IS_STATIC) {
    // Static build
    return {
      entry: {
        [config.bundleName]: [
          "./source/index.js"
        ].filter(item => item)
      },
      output: {
        publicPath: "/",
        path: path.join(process.cwd(), "build"),
        filename: "[name].js"
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: require.resolve("babel-loader"),
            options: {
              babelrc: false,
              presets: [require.resolve("@phenomic/babel-preset")],
              plugins: [require.resolve("react-hot-loader/babel")]
            }
          },
          {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
              fallbackLoader: 'style-loader',
              loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]!postcss-loader!sass-loader',
            }),
          }
        ]
      },
      plugins: [
        new ExtractTextPlugin({filename: "styles.css"}),
        IS_PRODUCTION && new webpack.optimize.UglifyJsPlugin(),
      ].filter(item => item),

      resolve: {
        // react-native(-web) | react-primitives
        extensions: [".web.js", ".js", ".json"],
        alias: {
          "react-native": "react-native-web",
          // to ensure a single module is used
          react: path.resolve(path.join(nodeModules, "react")),
          "react-dom": path.resolve(path.join(nodeModules, "react-dom")),
          "react-router": path.resolve(path.join(nodeModules, "react-router"))
        }
      },

      // eslint-disable-next-line max-len
      // https://github.com/facebookincubator/create-react-app/blob/fbdff9d722d6ce669a090138022c4d3536ae95bb/packages/react-scripts/config/webpack.config.prod.js#L279-L285
      node: {
        fs: "empty",
        net: "empty",
        tls: "empty"
      }
    };
  } else {
    // Development build
    return {
      devtool: 'source-map',
      entry: {
        [config.bundleName]: [
          require.resolve("webpack-hot-middleware/client"),
          require.resolve("react-hot-loader/patch"),
          "./source/index.js"
        ].filter(item => item)
      },
      output: {
        publicPath: "/",
        path: path.join(process.cwd(), "build"),
        filename: "[name].js"
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: require.resolve("babel-loader"),
            options: {
              babelrc: false,
              presets: [require.resolve("@phenomic/babel-preset")],
              plugins: [require.resolve("react-hot-loader/babel")]
            }
          },
          {
            test: /\.global\.scss/,
            use: [
              'style-loader?sourceMap',
              'css-loader?sourceMap',
              'sass-loader?sourceMap',
            ],
          },
          {
            test: /^((?!\.global).)*\.scss/,
            use: [
              'style-loader',
              // Using source maps breaks urls in the CSS loader
              // https://github.com/webpack/css-loader/issues/232
              // This comment solves it, but breaks testing from a local network
              // https://github.com/webpack/css-loader/issues/232#issuecomment-240449998
              // 'css-loader?sourceMap',
              'css-loader?importLoaders=1&modules&localIdentName=[path]__[name]_[local]',
              'postcss-loader',
              'sass-loader',
            ],
          },
          {
            test: /\.(?:png|jpg|svg|otf|ttf)$/,
            loader: require.resolve('url-loader'),
            exclude: /\.inline\.svg$/,
          },
        ]
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
      ].filter(item => item),

      resolve: {
        // react-native(-web) | react-primitives
        extensions: [".web.js", ".js", ".json"],
        alias: {
          "react-native": "react-native-web",
          // to ensure a single module is used
          react: path.resolve(path.join(nodeModules, "react")),
          "react-dom": path.resolve(path.join(nodeModules, "react-dom")),
          "react-router": path.resolve(path.join(nodeModules, "react-router"))
        }
      },

      // eslint-disable-next-line max-len
      // https://github.com/facebookincubator/create-react-app/blob/fbdff9d722d6ce669a090138022c4d3536ae95bb/packages/react-scripts/config/webpack.config.prod.js#L279-L285
      node: {
        fs: "empty",
        net: "empty",
        tls: "empty"
      }
    };
  }
};
