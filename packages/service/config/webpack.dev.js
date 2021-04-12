const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path')

module.exports = merge(common,{
    mode:'development',
    entry:path.resolve(__dirname,"../public/index.ts"),
    devServer:{
        open:true,
        port:8889,
        compress:true
    }
})

