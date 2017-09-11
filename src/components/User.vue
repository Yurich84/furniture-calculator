<template>
  <div class="user">
    <h1>{{ msg }}</h1>
    <!-- выведем имя, логин и ID загруженного пользователя  -->
    <h2>{{ user.name }} @{{ user.username }} (ID {{ user.id }})</h2>

  </div>
</template>

<script>
import axios from 'axios' // импортируем библиотеку axios

export default {
  name: 'user',
  props: ['id'], // следим за параметром id из URL
  data () {
    return {
      msg: 'Страница пользователя (User.vue)',
      user: [] // создаём пустой массив
    }
  },
  methods: {
    getUserByID: function(id) {
      const api_url = 'https://jsonplaceholder.typicode.com/users/' // используем JSON заглушку

      // делаем GET запрос
      axios.get(api_url + id) 
      .then((response) => {
        this.user = response.data; // пишем ответ в массив user
      })
      .catch((error) => {
        console.log(error); // выводим ошибку в консоль , если что-то пошло не так
      });
    }
  },
  mounted() {
    this.getUserByID(this.id) // вызываем наш метод с параметром id из URL
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>