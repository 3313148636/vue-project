
const path = require('path')

function resolve(url) {
  return path.resolve(__dirname, url)
}


module.exports = {
    devServer: {
      port: 8000,
      proxy: {
        '/my': {
          target: 'http://m.maoyan.com/',
          changeOrigin: true,
          pathRewrite: {
            '^/my': ''
          }
        }
      }
    },
    chainWebpack  (config)  {
       config
            .resolve
            .alias
            .set('@styles', resolve('src/css'))
            .set('@libs', resolve('src/libs'))
            .set('@component', resolve('src/components'))
            .set('@pages', resolve('src/pages'))
            .set('@util', resolve('src/util'))
    }
}