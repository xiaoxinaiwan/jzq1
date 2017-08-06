<template>
  <div class="hello">
    <input type="text" v-model="msg" placeholder='sssss'>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><router-link v-bind:to="'/header'">Home</router-link></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <shop></shop>
    <sot></sot>
  </div>
</template>

<script>
  import shop from './header'
  import sot from './header'
  import ss from '../../static/js/aa.js'

  export default {
    name: 'hello',
    components: {
      shop,
      sot/*注册自定义标签*/
    },
    data () {
      return {
      msg: 'Welcome to Your Vue.js App'
      }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

