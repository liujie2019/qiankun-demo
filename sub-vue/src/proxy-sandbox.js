class ProxySandbox {
  constructor() {
    const rawWindow = window
    const fakeWindow = {}
    const proxy = new Proxy(fakeWindow, {
      set(target, prop, value) {
        target[prop] = value
        return true
      },
      get(target, prop) {
        return target[prop] || rawWindow[prop]
      }
    })
    this.proxy = proxy
  }
}
const proxySandbox1 = new ProxySandbox()
const proxySandbox2 = new ProxySandbox()
const proxySandbox3 = new ProxySandbox()

window.a = 666
;(window => {
  window.a = 'proxy sandbox 1'
  console.log(window.a) // proxy sandbox 1
})(proxySandbox1.proxy)
;(window => {
  window.a = 'proxy sandbox 2' // proxy sandbox 2
  console.log(window.a)
})(proxySandbox2.proxy)
;(window => {
  console.log(window.a) // 666
})(proxySandbox3.proxy)
