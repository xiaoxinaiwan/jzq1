import Vue from 'vue'
import Router from 'vue-router'
// import Vuex from 'vuex'

import Hello from '../components/Hello'
import header from '../components/header'

Vue.use(Router)
// Vue.use(Vuex)

//单个
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/header',
      name: 'header',
      component: header
    }
  ]
})

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       components: {
//         default:hello
//         // header:header
//       }
//     }
//   ]
// })
