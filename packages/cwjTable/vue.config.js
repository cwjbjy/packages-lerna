module.exports={
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    lintOnSave: false, //eslint代码检测
    pages:{
        index:{
            entry:'./examples/main.js',
            template:'./public/index.html',
            filename:'index.html'
        }
    }
}