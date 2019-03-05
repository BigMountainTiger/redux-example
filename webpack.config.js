'use strict';

const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

const paths = {
		publicPath: '/build/',
		outputPath: path.resolve('./client/build'),
		polyfills: path.resolve('./client/common/polyfills.js'),
		example1: path.resolve('./client/src/example1/index.js'),
		appNodeModules: path.resolve('./node_modules'),
		appSrc: path.resolve('./client/src'),
		appPackageJson: path.resolve('./package.json'),
};

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: { example1: [ paths.polyfills, paths.example1 ]},
  output: {
    pathinfo: true,
    path: paths.outputPath,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: paths.publicPath
  },
  resolve: {
	modules: ['node_modules'],
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    alias: { 'react-native': 'react-native-web' },
    plugins: [ new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]) ],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
	    test: /\.(js|jsx|mjs)$/, enforce: 'pre',
	    use: [
	      {
	        options: {
	          formatter: eslintFormatter,
	          eslintPath: require.resolve('eslint'),
	        },
	        loader: require.resolve('eslint-loader'),
	      },
	    ], include: paths.appSrc,
	  },
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.(js|jsx|mjs)$/,
            include: paths.appSrc,
            loader: require.resolve('babel-loader'),
            options: { cacheDirectory: true, },
          },
          {
            test: /\.css$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9',
                      ],
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
            ],
          },
          {
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            loader: require.resolve('file-loader'),
            options: { name: 'static/media/[name].[hash:8].[ext]', },
          },
        ],
      },
    ],
  },
  plugins: [
	new webpack.NamedModulesPlugin(),
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  node: { dgram: 'empty', fs: 'empty', net: 'empty', tls: 'empty', child_process: 'empty', },
  performance: { hints: false, },
};

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.optimize.UglifyJsPlugin({})])}