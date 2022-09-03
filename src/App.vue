<template>
  <BookHome />
</template>

<script>
import BookHome from "./components/BookHome.vue";

export default {
  name: 'App',
  components: {
    BookHome,
  }
}
</script>

<style>
body {
  background: #242424 !important;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}
</style>
