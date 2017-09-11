<template>
  <div id="app">

    <ul class="calc-nav bg-dark nav nav-pills nav-fill">
      <li class="nav-item">
        <router-link :to="{ name: 'konfig', params: {order: 1} }">Конфигурация</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'model', params: {order: 2} }">Модель</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'color', params: {order: 3} }">Цвет</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'size', params: {order: 4} }">Размер</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'other', params: {order: 5} }">Дополнительно</router-link>
      </li>
    </ul>

    <div v-show="true">{{ data }}</div>

    <div class="slider">
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </div>
    
  </div>
  
</template>

<script>

import Vue from 'vue'
var VueCookie = require('vue-cookie')
Vue.use(VueCookie)

export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left',
      data: { konfig: '', model: '', color: '', size: '', fasad: '', mirr: '' }
    }
  },
  watch: {
    '$route' (to, from) {
      this.transitionName = from.params.order > to.params.order ? 'slide-right' : 'slide-left'
    }
  },
  created: function() {
    if( Vue.cookie.get('calc_data')) {
        this.data = JSON.parse(Vue.cookie.get('calc_data'))

      } else {
        this.data = { konfig: '', model: '', color: '', size: '', fasad: '', mirr: '' }
      }
  },

  methods: {
    changeData: function(newData) {
      // console.log(newData);
      // записиваем в куку
      Vue.cookie.set('calc_data', JSON.stringify(newData));
    }
  }
}
</script>

<style>
#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  color: #42b983;
}

#app .slider > div {
  position: absolute;
  top: 90px;
  left: 0;
  bottom: 0;
  right:0;
}

.slide-left-leave-active,
.slide-left-enter-active {
  transition: 1s;
}
.slide-left-enter {
  transform: translate(100%, 0);
}
.slide-left-leave-to {
  transform: translate(-100%, 0);
}

.slide-right-leave-active,
.slide-right-enter-active {
  transition: 1s;
}

.slide-right-enter {
  transform: translate(-100%, 0);
}
.slide-right-leave-to {
  transform: translate(100%, 0);
}
</style>
