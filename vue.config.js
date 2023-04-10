const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
 transpileDependencies: true,
 lintOnSave:false,


    devServer:{
            port:8000, //端口
                proxy:{
                    '/itlong':{ //代理
                            target:'http://www.itlong.top/', //请求地址
                            changeOrigin:true, //是否跨域
                            ws:true,
                            pathRewrite:{
                                "^/itlong":'' 
                            }
                    }
                }
    }
 
})