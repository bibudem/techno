module.exports = function (context, options) {
    return {
      name: 'docusaurus-plugin-webp',
      configureWebpack(config, isServer) {
        return {
          mergeStrategy: { 'module.rules': 'prepend' },
          module: {
            rules: [
              {
                test: /\.(png|jpe?g)$/i,
                use: [
                  {
                    loader: require.resolve('responsive-loader'),
                    options: {
                      adapter: require('responsive-loader/sharp'),
                      sizes: [320, 640, 960, 1280],
                      format: 'webp',
                      quality: 75,
                      placeholder: true,
                    },
                  },
                ],
              },
            ],
          },
        };
      },
    };
  };