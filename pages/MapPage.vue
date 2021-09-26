<template>
  <div id="app">
    <div class="HeaderContainer">
      <div class="headerText">Maji City Maching</div>
    </div>
    <my-map />
  </div>
</template>

<script>
import MyMap from '../components/MyMap.vue'
export default {
  name: 'app',
  components: {
    'my-map': MyMap
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
#app {
  height: 100vh;
}
.HeaderContainer{
  height: 30px;
  text-align: center;
  border: 0.125px solid;
}
.headerText{
  font-size: 20px;
}
</style>
