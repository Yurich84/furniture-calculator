<template>
  <div class="color">
    <h1>Размер</h1>
		<h3>Заводские размеры</h3>
		<div class="row">

			<div class="col-4">
				<h5>Ширина</h5>
				<select name="sh" id="sh">
					<option v-for="sh in sizes.sh" :value="sh" >{{sh}}</option>
				</select>
			</div>

			<div class="col-4">
				<h5>Глубина</h5>
				<select name="gl" id="gl">
					<option v-for="gl in sizes.gl" :value="gl" >{{gl}}</option>
				</select>
			</div>

			<div class="col-4">
				<h5>Высота</h5>
				<select name="vis" id="vis">
					<option value="2100" >2100</option>
					<option value="2200" >2200</option>
					<option value="2300" >2300</option>
					<option value="2400" >2400</option>
				</select>
			</div>

		</div>

		<br /><br />

		<h3>Свои размеры</h3>
		<div class="row">

			<div class="col-4">
				<h5>Ширина</h5>
				<input type="text" name="my_sh">
			</div>

			<div class="col-4">
				<h5>Глубина</h5>
				<input type="text" name="my_gl">
			</div>

			<div class="col-4">
				<h5>Высота</h5>
				<input type="text" name="my_vis">
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
       sizes: []
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
      const api_url = 'http://pitmebel/api/size/' + this.data.model

      // делаем GET запрос
      axios.get(api_url) 
      .then((response) => {
        this.sizes = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    },

  	changeItem: function(id) {
  		// меняем модель
  		this.data.size = id
  		this.$parent.$options.methods.changeData(this.data)
      this.$router.push( { name: 'size', params: {order: 4}} );
  	}
  }
}

</script>