import Vue from 'vue'
import App from './App'
import store from './store'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

/**
 * 全局默认配置
 */
// axios.defaults.baseURL = 'http://123.207.32.32:8000/';   // 请求的根路径, 配置了这个之后, 请求的 url 就可以设置成 '/home/data'
// axios.defaults.timeout = 4000;            // 超时时间

let url1 = 'home/multidata'
let url2 = 'home/data'

/**
 * 1. 基本使用
 */
// axios({
//   url: 'http://httpbin.org/'
// }).then(res => {
//   console.log(res);
// })

// axios.get(url, config)

/**
 * 2. 处理并发请求
 */
// axios.all([
//   axios({ url: url1  }),
//   axios({ 
//     url: url2,
//     params: {
//       type: 'sell',
//       page: 5
//     }
//   })
// ]).then(result => {
//   console.log(result);
// })


/**
 * 3. 使用 axios 的实例
 */
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000/',
//   timeout: 2000
// });
// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// });
// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

/**
 * 通过自定义的封装来使用
 */
 import { request } from './network/request'
// 使用方式一的
// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })

// 使用方式二的
// request({
//   baseConfig: {
//     url: '/home/multidata',
//   },
//   success(res){
//     console.log(res);
//   },
//   failure(err){
//     console.log(err);
//   }
// })

// 使用方式三、四的
request({
  url: '/home/multidata'
}).then(
  res => console.log(res),
  // err => console.log(err)
)

