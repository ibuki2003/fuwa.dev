export default () => ({
  webpack: config => {
    config.module.rules[0].oneOf.unshift({
      test: /\.s[ac]ss$/,
      use: [
        'style-loader',
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
