/**
 * 自定义对 axios 的封装
 */
import axios from 'axios'

/**
 * 方式一 回调
 */
// export function request(config, success, failure) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000/',
//     timeout: 4000
//   });
//   instance(config)
//     .then( res => {
//       success(res);
//     }
//   ).catch( err => {
//     failure(err);
//   })
// }

/**
 * 方式二 回调在config 里面
 */
// export function request(config) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000/'
//   });
//   instance(config.baseConfig)
//     .then( res => {
//       config.success(res)
//     }
//   ).catch( err => {
//     config.failure(err)
//   })
// }

// 方式三 返回 promise
// export function request(config) {
//   return new Promise ((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000/'
//     });
//     instance(config)
//       .then( res => resolve(res)
//     ).catch( err => reject(err)
//     )
//   })
// }

// 方式四 直接返回
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/'
  });

  // 拦截器, 参数是两个函数
  instance.interceptors.request.use(config => {
    console.log(config);     // 请求的一些信息
    /**
     * 此处可以进行
     * 1. 若请求信息不符合一些要求，需要改变之后再传到服务器
     * 2. 每次发送网络请求时，都要在界面显示一个加载图标
     * 3. 某些网络请求，必须携带一些特殊信息，判断该请求路径与请求信息是否一致
     * 
     */
    // 拦截后，需要把请求信息返回出去
    return config
  }, err => {
    console.log(err);
  });

  instance.interceptors.response.use(res => {
    console.log(res);

    // 拦截之后，需要把结果返回出去. 且 可以只返回自己要使用的数据
    return res.data;
  }, err => {
    console.log(err);
  })

  return instance(config);
}
