<template>
  <div class="color">
    <h1>Цвет</h1>

        <p>Выберите цвет</p>

    <div class="row">
      <div class="col-2 col-sm-1 center" v-for="color in colors" @click="changeItem(color.color_id)">
        <img :src=color.img width="100">
        <p>{{ color.color.name }}</p>
      </div>
    </div>

  </div>
</template>

<script>

import axios from 'axios' // импортируем библиотеку axios

export default {
	name: 'color',
	data () {
    return {
       data: {},
       colors: []
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
      const api_url = 'http://pitmebel/api/colors/' + this.data.model

      // делаем GET запрос
      axios.get(api_url) 
      .then((response) => {
        this.colors = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    },

  	changeItem: function(id) {
  		// меняем модель
  		this.data.color = id
  		this.$parent.$options.methods.changeData(this.data)
      this.$router.push( { name: 'size', params: {order: 4}} );
  	}
  }
}

</script>
