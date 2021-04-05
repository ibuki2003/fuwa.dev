const MiniCssExtractPlugin = require('mini-css-extract-plugin');

export default () => ({
  webpack: config => {
    config.plugins.push(new MiniCssExtractPlugin());
    config.module.rules[0].oneOf.unshift({
      test: /\.s[ac]ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        // 'postcss-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
            sassOptions: {
              fiber: require('fibers'),
            },
          },
        },
      ],
    });

    return config
  }
})
