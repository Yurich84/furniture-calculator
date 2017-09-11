<template>
  <div class="konfig">
    <h1>Конфигурация</h1>

    <p>Выберите конфигурацию</p>

    <div class="row">
      <div class="col-4" v-for="stvorka in stvorki" @click="changeItem(stvorka.id)">
        <img :src=stvorka.img width="100">
      </div>
    </div>

    
  </div>
</template>

<script>

import axios from 'axios' // импортируем библиотеку axios

export default {
	name: 'konfig',
	data () {
    return {
       data: {},
       stvorki: []
    }
  },

  created: function() {
    this.data = this.$parent.data
  },

  mounted() {
    this.getItems() // вызываем наш метод
  },

  methods: {
    getItems: function() {
      const api_url = 'http://pitmebel/api/stvorki'

      // делаем GET запрос
      axios.get(api_url) 
      .then((response) => {
        this.stvorki = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    },

  	changeItem: function(id) {
  		// меняем конфигурацию
      this.data.konfig = id
  		this.data.model = ''
      // console.log(this.data)
  		this.$parent.$options.methods.changeData(this.data)
  	}
  }
}

</script>
