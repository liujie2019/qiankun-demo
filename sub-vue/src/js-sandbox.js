// 快照沙箱
class SnapshotSandbox {
  constructor() {
    this.proxy = window
    this.modifyPropsMap = {}
    this.active()
  }
  active() {
    this.windowSnapshot = {} // 快照
    for (const prop in window) {
      this.windowSnapshot[prop] = window[prop]
    }
    Object.keys(this.modifyPropsMap).forEach(prop => {
      window[prop] = this.modifyPropsMap[prop]
    })
  }
  inactive() {
    for (const prop in window) {
      if (window.hasOwnProperty(prop)) {
        if (this.windowSnapshot[prop] !== window[prop]) {
          this.modifyPropsMap[prop] = window[prop] // 保存变化属性
          window[prop] = this.windowSnapshot[prop] // 恢复原来属性
        }
      }
    }
  }
}

const sandbox = new SnapshotSandbox()
;(window => {
  window.a = 6
  window.b = 8
  console.log(window.a) // 6
  sandbox.inactive() // 失活
  console.log(window.a) // undefined
  sandbox.active() // 激活
  console.log(window.a) // 6
})(sandbox.proxy)
// sandbox.proxy就是window
