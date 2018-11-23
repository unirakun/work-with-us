process.on('unhandledRejection', (reason) => {
  console.log(reason)
  console.error(reason)
  console.trace()
})

console.time('server ready')

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
