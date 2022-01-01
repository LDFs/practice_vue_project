<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="addition">+</button>
    <button @click="jian">-</button>
    <button @click="add(5)">+5</button>
    <button @click="subCount(5)">-5</button>
    <h3>power: {{$store.getters.powerCounter}}</h3>
    <hr>
    <h4>年龄大于33: {{$store.getters.coupleUpper33}}</h4>
    <h4>数组长度: {{$store.getters.couper33Length}}</h4> 
    <hr>
    <h4>自己传过去参数: {{$store.getters.coupleUpper(20)}}</h4>
    <hr>
    <button @click="addCouple">添加数组元素</button>
    <hr>
    <h4>{{$store.state.oneInfo}}</h4>
    <button @click="updateInfo">更改对象元素</button>
    <hr>
    <h3>{{$store.state.son.gitWeb}}</h3>
    <button @click="updateWeb">更改web url</button>
    <hr>
    <span>{{$store.getters.fullWebsite}} - {{$store.getters.fullWebsite2}} - {{$store.getters.fullWebsite3}}</span>
  </div>
</template>

<script>
import {INCREMENT} from '../store/mutations-types'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to My Personal App'
    }
  },
  methods: {
    addition() {
      // 使用mutation的常量方法名
      this.$store.commit(INCREMENT)
    },
    jian() {
      this.$store.commit('decrement')
    },
    // 传递给 mutations 参数
    add(count){
      this.$store.commit('incrementCount', count);
    },
    // 以封装的方式进行提交
    subCount(count){
      this.$store.commit({
        type: 'subCount',
        count
      })
    },
    // 为 state 的 couple 添加元素
    addCouple(){
      let m = {name: 'yuuichi', gender: 'male', age: 41};
      this.$store.commit('addCouple', m)
    },
    // 更改对象元素
    updateInfo(){
      // 1. 直接使用 mutations 的方法更改 state ，只适用于同步方式
      // this.$store.commit('updateInfo', {mood: 'happy'})
      // 2. 使用 actions 的方法通过异步方式来更改 state；
      // 使用自定义的成功回调函数
      // this.$store.dispatch("aUpdateInfo", {
      //   message: 'payload',
      //   success(){
      //     console.log('更新成功');
      //   }
      // });
      // 3. 使用 Promise 的成功回调
      this.$store
        .dispatch("aUpdateInfo", "param")
        .then(result => {
          console.log(result);
      })
    },
    updateWeb(){
      this.$store.commit("updateWeb");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
