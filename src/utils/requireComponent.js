import Vue from 'vue'

const componentContext = require.context('../components', true, /index.vue$/)

componentContext.keys().forEach(componentPath => {
  const componentConfig = componentContext(componentPath).default
  Vue.component(componentConfig.name, componentConfig)
})
