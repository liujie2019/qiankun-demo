import './public-path'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
let instance = null
const render = (props = {}) => {
  const { container } = props
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#root') : '#root') // 这里是挂载到子应用的html中基座会拿到这个挂载后的html将其插入进去
}

if (!window.__POWERED_BY_QIANKUN__) {
  // 子应用支持独立开发运行
  render()
}

// 子应用相关协议，需要导出这三个方法
/* eslint-disable */
export async function bootstrap() {
  console.log('[vue] vue app bootstraped')
}
/* eslint-disable */
export async function mount(props) {
  console.log('[vue] props from main framework', props)
  render(props) // 装载
}
/* eslint-disable */
export async function unmount() {
  instance.$destroy() // 卸载
  instance = null
}
