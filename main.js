import App from './App'

import './index.scss';

// #ifndef VUE3
import Vue from 'vue'
Vue.prototype.staticURL = 'https://lvboda.cn/static/visual-3d';
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif