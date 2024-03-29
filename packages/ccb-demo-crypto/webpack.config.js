/* eslint-disable no-undef, import/no-extraneous-dependencies  */
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const environ = process.env.BABEL_ENV || process.env.NODE_ENV || 'development';
// eslint-disable-next-line no-console
console.log(`Building CCB-Demo-Crypto in ${environ}`);

const config = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'dist'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
    ],
  },
};

switch (environ) {
  case 'production':
    config.mode = 'production';
    config.plugins = [new UglifyJsPlugin()];
    config.output = {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist/prod'),
      libraryTarget: 'commonjs',
    };
    break;

  case 'development':
    config.mode = 'development';
    config.output = {
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist/dev'),
      libraryTarget: 'commonjs',
    };
    break;

  default:
    throw new Error('Unknown Environment');
}

module.exports = config;
