const microApps = [
  {
    name: 'sub-vue', // 微应用名称
    entry: '//localhost:8096', // 默认会加载这个html，解析里面的js动态的执行（子应用必须支持跨域)fetch
    activeRule: '/sub-vue', // 配置子应用匹配规则
    container: '#subapp-viewport', // 子应用挂载的容器
    props: { name: 'lisi' } // 父传子参数
  },
  {
    name: 'sub-react',
    entry: '//localhost:8097',
    activeRule: '/sub-react',
    container: '#subapp-viewport' // 子应用挂载的容器
  }
]

export default microApps
