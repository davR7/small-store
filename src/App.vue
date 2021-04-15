<template>
  <div id="app">
    <ViewHome />
  </div>
</template>

<script>
import ViewHome from './views/ViewHome.vue'

export default {
  name: 'App',
  components: {
    ViewHome
  }
}
</script>

<style>
body {
  background-color: #27363b;
  padding: 10px;
}

h1, h2, p {
	margin: 10px;
	padding: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  margin-top: 30px;
}

.centered-text {
  text-align: center;
}
</style>
