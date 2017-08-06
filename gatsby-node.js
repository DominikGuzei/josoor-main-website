const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.modifyWebpackConfig = function ({ config, stage }) {
  config.removeLoader('css');
  config.removeLoader('sass');
  const cssModulesConf = 'css?modules&minimize&importLoaders=1';
  const cssModulesConfDev = `${cssModulesConf}&sourceMap&localIdentName=[name]---[local]---[hash:base64:5]`;

  if (stage === 'develop') {
    config.loader('css', function (cfg) {
      cfg.test = /\.css$/;
      cfg.loaders = ['style', cssModulesConfDev, 'postcss']
      return cfg
    });

    config.loader('sass', function (cfg) {
      cfg.test = /\.(sass|scss)/;

      cfg.loaders = ['style', cssModulesConfDev, 'sass'];
      return cfg
    });
    return config;
  }
  else {
    config.loader('css', function (cfg) {
      cfg.test = /\.css$/;
      cfg.loader = ExtractTextPlugin.extract('style', [cssModulesConf, 'postcss']);
      return cfg
    });

    config.loader('sass', function (cfg) {
      cfg.test = /\.(sass|scss)/;

      cfg.loader = ExtractTextPlugin.extract('style', [cssModulesConf, 'sass']);
      return cfg
    });
    return config;
  }
};
