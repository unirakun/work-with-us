const logger = require('@work-with-us/logger')

logger.time('server ready')

require('ignore-styles')

require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    [
      'babel-plugin-styled-components',
      {
        pure: true,
      },
    ],
  ],
})

require('./src/index')
