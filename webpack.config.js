//Webpack requires this to work with directories
const path = require("path");

// css extraction and minification
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

let CopyPlugin = require('copy-webpack-plugin');

// clean out build dir in-between builds
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// This is main configuration object that tells Webpack what to do.
module.exports = {
  // target: ['web', 'es5'],
  entry: {
    main: [
      path.resolve(__dirname, 'src/js/app.js'),
      path.resolve(__dirname, 'src/scss/main.scss')
    ]
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/index.js",
    iife: false,
    environment: {
      arrowFunction: false,
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        /* { from: 'src/index.html', to: './' }, */
        {
          from: 'src/img/',
          to: './img'
        },
      ]
    }),

    // clear out build directories on each build
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        'build/js/*',
        'build/css/*'
      ]
    }),

    // css extraction into dedicated file
    new MiniCssExtractPlugin({
      filename: './css/style.css'
    }),
  ],

  optimization: {
    // minification - only performed when mode = production
    minimizer: [
      // css minification
      new CssMinimizerPlugin(),
    ]
  },
};
