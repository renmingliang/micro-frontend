import BaseMain from './BaseMain'
import BaseButton from './BaseButton'

const components = [
  BaseMain,
  BaseButton
];

// 单组件注册方法
components.forEach(Component => {
  Component.install = function (Vue) {
    Vue.component(Component.name, Component)
  }
})

// 批量组件注册
function install(Vue) {
  if (install.installed) {
    return
  }
  install.installed = true
  components.forEach(Component => {
    Component.install(Vue)
  })
}

const RunUI = {
  version: '1.0.0',
  install
}

components.forEach(Component => {
  const name = Component.name
  RunUI[name] = Component
})

export default RunUI