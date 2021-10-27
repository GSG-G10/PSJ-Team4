const CracoLessPlugin = require('craco-less');

// all less variables could be found in
//  https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less.

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#2F66B0',
              '@text-color': '#242424',
              '@text-color-secondary': 'fade(#707070, 85%)',
              '@icon-color': '#2F66B0',
              '@icon-color-hover': 'fade(#2F66B0, 75%)',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
