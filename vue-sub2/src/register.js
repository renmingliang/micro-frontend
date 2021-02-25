import Vue from 'vue';

const register = function (props) {
  const { components } = props;
  // 单组件注册-按需加载
  const BaseMain = components.BaseMain;
  Vue.use(BaseMain);
  // 批量注册-全量
  // Vue.use(components)
}

export default register;