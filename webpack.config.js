const path = require('path');

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        library: "root",        //
        libraryTarget: "umd"    //umd:表示支持amd、cmd、commonjs、es6 module、import所有这些引入方式
    },
    externals: "lodash" //防止将某些 import 的包(package)打包到 library.js 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(external dependencies)。
};