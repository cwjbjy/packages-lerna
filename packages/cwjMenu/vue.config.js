module.exports={
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    lintOnSave: false, //eslint代码检测
    pages:{
        index:{
            entry:'./examples/main.js',
            template:'./public/index.html',
            filename:'index.html'
        }
    },
    css: {
        extract: false, //关闭样式分离，这样引入时不需要额外导入样式
        sourceMap: false,
        // css预设器配置项
      },
}