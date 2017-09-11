<template>
  <div class="model">
    <h1>Модель</h1>

    <p>Выберите модель</p>

    <div class="row">
      <div class="col-3" v-for="model in models" @click="changeItem(model.id)">
        <img :src=model.img width="100">
      </div>
    </div>

  </div>
</template>

<script>

import axios from 'axios' // импортируем библиотеку axios

export default {
	name: 'model',
	data () {
    return {
       data: {},
       models: []
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
      const api_url = 'http://pitmebel/api/models/162/' + this.data.konfig

      // делаем GET запрос
      axios.get(api_url) 
      .then((response) => {
        this.models = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    },

  	changeItem: function(id) {
  		// меняем модель
  		this.data.model = id
  		this.$parent.$options.methods.changeData(this.data)
  	}
  }
}

</script>
