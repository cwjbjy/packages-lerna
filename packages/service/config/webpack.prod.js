const {merge} = require('webpack-merge');
const path = require('path')
const common = require('./webpack.common.js');

module.exports = merge(common,{
    mode:'production',
    entry:path.resolve(__dirname,"../src/index.ts"),
})