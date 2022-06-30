const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  SRC: path.join(__dirname, './src'),
  DIST: path.join(__dirname, './dist'),
  ASSETS: `assets`,
};

const MODE = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'development',
};
const mode = process.env.NODE_ENV || MODE.DEVELOPMENT;
const isDev = (mode === MODE.DEVELOPMENT);

const getHtmlTemplate = () => {
  const fileNames = fs.readdirSync(PATHS.SRC)
    .filter(file => file.match(/\.html$/i))
    .map(el => el.replace('.html', '/'));

  return fileNames.map(name => (
    new HtmlWebpackPlugin({
      template: `${PATHS.SRC}/index.html`,
      filename: `./${name}index.html`,
    })
  ));
};

module.exports = {
  mode: mode,

  entry: PATHS.SRC,

  output: {
    filename: `${PATHS.ASSETS}/js/[name].js`,
    path: PATHS.DIST,
    assetModuleFilename: `${PATHS.ASSETS}/images/[hash][ext]`,
    clean: !isDev,
  },

  plugins: [
    // ...getHtmlTemplate(),
    new HtmlWebpackPlugin({
      template: `${PATHS.SRC}/index.html`,
      filename: './index.html',
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.SRC}/pets.html`,
      filename: './pets/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].min.css',
    }),
  ],

  module: {
    rules: [

      {
        test: /\.html$/i,
        loader: 'html-loader',
      },

      {
        test: /\.(gif|png|jpe?g)$/,
        type: 'asset/resource',
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                  ],
                ],
              },
            },
          },
          'sass-loader',
        ],
      },

      {
        test: /\.n?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                useBuiltIns: 'entry',
                corejs: 3.21
              }],
            ],
          }
        },
      },
    ]
  },

  devServer: {
    watchFiles: [`${PATHS.SRC}/**/*`],
    port: 8081,
  },

  devtool: isDev && 'source-map',
};
