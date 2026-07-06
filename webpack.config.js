const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';

  return {
    entry: './src/js/main.js',
    output: {
      path: path.resolve(__dirname, 'assets/build'),
      filename: 'main.js',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { url: false } },
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: 'style.css' }),
    ],
    devtool: isDev ? 'source-map' : false,
  };
};
