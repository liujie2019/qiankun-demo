// package.json的name需注意与主应用一致
const port = 8096
module.exports = {
  configureWebpack: {
    // 把子应用打包成 umd 库格式
    output: {
      library: 'subVueApp',
      libraryTarget: 'umd' // 把微应用打包成 umd 库格式
    }
  },
  devServer: {
    port,
    headers: {
      'Access-Control-Allow-Origin': '*' // 主应用获取子应用时跨域响应头
    }
  }
}
