const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    // // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    lintOnSave: true,
    chainWebpack: config => {
        // @scss是你取的静态资源路径别名
        config.resolve.alias
            .set('@ast', resolve('src/assets'))
            .set('@com', resolve('src/components'))
            .set('@scss', resolve('src/scss'))//全局样式
            .set('@sev', resolve('src/service'))
            .set('@utils', resolve('src/utils'))
            .set('@views', resolve('src/views'))
            .set('@store', resolve('src/store'))
            .set('@', resolve('src'))
        // 先用@/的方式  其他的没生效

        // if (process.env.NODE_ENV === 'production') {
        //     config
        //         .plugin('uglify')
        //         .tap(([options]) => {
        //             // 去除 console.log
        //             return [Object.assign(options, {
        //                 uglifyOptions: {
        //                     compress: {
        //                         drop_console: true,
        //                         pure_funcs: ['console.log']
        //                     }
        //                 }
        //             })]
        //         })
        // }
    },
    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项，这里配置的是全局导入
            sass: {
                // @scss 是 src/static/scss 的别名
                data: `@import "@scss/index.scss";`
            }
        }
    },
    // 在.vue文件中使用   import url(`@scss/xxx.scss`);
    devServer: {
        open: true,
        host: 'localhost',
        port: 8081,
        https: false,
        hotOnly: false,
        proxy: { // 配置跨域
            '/api': {
                //要访问的跨域的api的域名
                target: ' http://127.0.0.1:8888/api/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    }
}
