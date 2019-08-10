'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const name = defaultSettings.title || 'my project' // page title
// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
const port = 9527 // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {

    /**
     * You will need to set publicPath if you plan to deploy your site under a sub path,
     * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
     * then publicPath should be set to "/bar/".
     * In most cases please use '/' !!!
     * Detail: https://cli.vuejs.org/config/#publicpath
     */
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
        port: port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            // change xxx-api/login => mock/login
            // detail: https://cli.vuejs.org/config/#devserver-proxy
            //   [process.env.VUE_APP_BASE_API]: {
            //     target: `http://localhost:${port}/mock`,
            //     changeOrigin: true,
            //     pathRewrite: {
            //       ['^' + process.env.VUE_APP_BASE_API]: ''
            //     }
            //   }
            // },
            after: require('./mock/mock-server.js')
        },
        configureWebpack: {
            // provide the app's title in webpack's name field, so that
            // it can be accessed in index.html to inject the correct title.
            name: name,
            resolve: {
              alias: {
                // @ 简写src路径
                '@': resolve('src')
              }
            }
          },

          // chainconfig   https://cli.vuejs.org/guide/webpack.html#chaining-advanced
          chainWebpack(config) {

            config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
              options.compilerOptions.preserveWhitespace = true
              return options
            })
            .end()
          }
    }
}