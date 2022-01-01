import Vue from 'vue'
import Vuex from 'vuex'

import {INCREMENT} from './mutations-types'

Vue.use(Vuex);

const subModule = {
  state: {
    gitWeb: 'github.com'
  },
  mutations: {
    updateWeb(state){
      state.gitWeb = "biying.com"
    }
  },
  getters: {
    fullWebsite(state){
      return "http://"+state.gitWeb
    },
    fullWebsite2(state, getters){
      return getters.fullWebsite + "/ldfs"
    },
    fullWebsite3(state, getters, rootState){
      return getters.fullWebsite2 + rootState.counter
    }
  },
  actions: {
    // 
  }
}

const store = new Vuex.Store({
  state: {
    counter: 10,
    couple: [
      {name: 'mei', gender: 'female', age: 35},
      {name: 'kodi', gender: 'male', age: 36},
      {name: 'rose', gender: 'female', age: 13},
      {name: 'sanr', gender: 'male', age: 31}
    ],
    oneInfo: {
      time: '2021-12-02',
      place: '2234.908',
      people: '3'
    }
  },
  mutations: {
    // 增加counter 1 默认第一个参数为state
    // 使用常量方式来写方法名，进行统一
    [INCREMENT](state){
      state.counter++;
    },
    // 减少 counter 1
    decrement(state){
      state.counter--;
    },
    incrementCount(state, count){
      state.counter += count;
    },
    // 以封装的方式提交过来
    subCount(state, payload){
      state.counter -= payload.count;
    },
    // 为 couple 添加元素
    addCouple(state, member){
      state.couple.push(member);
    },
    // 为对象添加新的属性值，*********测试响应式规则**********
    updateInfo(state, i){
      // state.oneInfo['mood'] = 'happy';   // 添加属性值  失败
      // Vue.set(state.oneInfo, 'mood', 'happy');

      // delete state.oneInfo.place;   // 失败
      Vue.delete(state.oneInfo, 'place');

      // setTimeout(() => {
      //   Vue.delete(state.oneInfo, 'place');
      // }, 1000)
    }
  },
  actions: {
    // context 上下文  -> store对象
    // 1. 使用自定义成功回调函数
    // aUpdateInfo(context, payload){
    //   setTimeout(() => {
    //     context.commit('updateInfo');
    //     console.log(payload.message);
    //     payload.success();
    //   }, 1000);
    // },
    // 2. 使用 Promise 的成功回调
    aUpdateInfo(context, payload){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo');
          console.log(payload);
          resolve("success");
        }, 1000);
      })
      
    },
  },
  getters: {
    // 计算 counter 的平方
    powerCounter(state){
      return state.counter * state.counter;
    },
    // 筛选 couple 里面年龄大于33的元素
    coupleUpper33(state){
      return state.couple.filter(c => c.age>33)
    },
    // 得到coupleUpper33的长度
    couper33Length(state, getters){
      return getters.coupleUpper33.length;
    },
    // 通过参数来指定要筛选的couple年龄大于多少
    coupleUpper(state){
      return age => {
        return state.couple.filter(c => c.age > age)
      }
    }
  },
  modules: {
    son: subModule
  }
});

export default store;
