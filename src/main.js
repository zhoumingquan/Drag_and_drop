import Vue from 'vue'
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css
import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
// import '@/permission' // permission control
Vue.component(CollapseTransition.name, CollapseTransition)
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
