<template>
  <div class="user">
    <h1>{{ msg }}</h1>

    <!-- выведем имя, логин и ID загруженного пользователя  -->
    <div class="mb-1" v-for="user in users">
      <router-link :to="{ name: 'user', params: {id: user.id} }">{{ user.name }}</router-link>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios' // импортируем библиотеку axios

export default {
  name: 'user',
  props: ['id'], // следим за параметром id из URL
  data () {
    return {
      msg: 'Список пользователей',
      users: [] // создаём пустой массив
    }
  },
  methods: {
    getUserList: function() {
      const api_url = 'https://jsonplaceholder.typicode.com/users/' // используем JSON заглушку

      // делаем GET запрос
      axios.get(api_url) 
      .then((response) => {
        this.users = response.data; // пишем ответ в массив user
      })
      .catch((error) => {
        console.log(error); // выводим ошибку в консоль , если что-то пошло не так
      });
    }
  },
  mounted() {
    this.getUserList() // вызываем наш метод
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