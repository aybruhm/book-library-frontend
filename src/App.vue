<template>
  <GetBooks msg="a book library application" />
</template>

<script>
import GetBooks from "./components/GetBooks.vue";

export default {
  name: 'App',
  components: {
    GetBooks
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
