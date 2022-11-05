import App from './App'

import './index.scss';

// #ifndef VUE3
import Vue from 'vue'
Vue.prototype.baseUrl = 'https://7669-visualization-3d-8fdknpgfa834ec0-1309494979.tcb.qcloud.la';
Vue.prototype.photosPath = '/test-photos';
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