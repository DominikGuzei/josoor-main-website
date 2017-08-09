const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.modifyWebpackConfig = function ({ config, stage }) {
  config.removeLoader('sass');
  const cssModulesConf = 'css-loader?modules&minimize&importLoaders=1';
  const cssModulesConfDev = `${cssModulesConf}&sourceMap&localIdentName=[name]---[local]---[hash:base64:5]`;

  if (stage === 'develop') {
    config.loader('css-global', function (cfg) {
      cfg.test = /\.global\.scss$/;
      cfg.loaders = ['style-loader?sourceMap', 'css-loader?sourceMap', 'sass-loader?sourceMap'];
      return cfg
    });
    config.loader('css-modules', function (cfg) {
      cfg.test = /^((?!\.global).)*\.scss$/;
      cfg.loaders = ['style-loader?sourceMap', cssModulesConfDev, 'sass-loader?sourceMap'];
      return cfg
    });
    return config;
  }
  else {
    config.loader('css-global', function (cfg) {
      cfg.test = /\.global\.scss$/;
      cfg.loader = ExtractTextPlugin.extract('style-loader', ['css-loader', 'sass-loader']);
      return cfg;
    });
    config.loader('css-modules', function (cfg) {
      cfg.test = /^((?!\.global).)*\.scss$/;
      cfg.loader = ExtractTextPlugin.extract('style-loader', [cssModulesConf, 'sass-loader']);
      return cfg;
    });
    return config;
  }
};
