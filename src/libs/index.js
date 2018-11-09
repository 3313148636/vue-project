import Vue from 'vue'
// axios
import ajax from '@util/axios'

// bus
import bus from '@util/bus'

Vue.prototype.$http = ajax
Vue.prototype.$bus = bus
