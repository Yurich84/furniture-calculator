import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Konfig from '@/components/Konfig'
import Model from '@/components/Model'
import Color from '@/components/Color'
import Size from '@/components/Size'
import Other from '@/components/Other'

import User from '@/components/User'
import Userlist from '@/components/Userlist'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'konfig', component: Konfig },
    { path: '/:order-model', name: 'model', component: Model },
    { path: '/:order-color', name: 'color', component: Color },
    { path: '/:order-size', name: 'size', component: Size },
    { path: '/:order-other', name: 'other', component: Other },

    { path: '/hello', name: 'hello', component: Hello },
    { path: '/userlist', name: 'userlist', component: Userlist },
    { path: '/user/:id', name: 'user', component: User, props: true } // страница пользователя
  ],
  mode: 'history'
})
