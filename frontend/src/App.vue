<template>
  <NavBarComp/>
  <router-view/>
</template>

<script>
import NavBarComp from './components/NavBar-Comp.vue'
export default {
  components: {NavBarComp}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #FAF9E8;
}
</style>
