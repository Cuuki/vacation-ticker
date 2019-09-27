module.exports = {
  webpack: (config, {dev}) => {
    if (dev) {
      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: /(components|pages|src)/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          quiet: true,
        },
      });
    }

    return config;
  },
};
