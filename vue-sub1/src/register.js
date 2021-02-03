import Vue from 'vue';

const register = function (props) {
  const { components } = props;
  if (register.installed || !components) {
    return
  }
  register.installed = true;
  Object.keys(components).forEach(key => {
    const Component = components[key]
    Vue.component(Component.name, Component)
  })
}

export default register;