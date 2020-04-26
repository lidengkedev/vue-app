// const path = require('path')

// const resolve = dirname => path.resolve(__dirname, dirname)
const host = process.env.VUE_APP_HOST
const port = process.env.VUE_APP_PORT

module.exports = {
  devServer: {
    host,
    port
  }
  // configureWebpack(config) {
  //   config.resolve.alias = {
  //     '@': resolve('src')
  //   }
  // },

  // chainWebpack(config) {
  //   // set preserveWhitespace
  //   config.module
  //     .rule('vue')
  //     .use('vue-loader')
  //     .loader('vue-loader')
  //     .tap(options => {
  //       options.compilerOptions.preserveWhitespace = true
  //       return options
  //     })
  //     .end()
  // }
}