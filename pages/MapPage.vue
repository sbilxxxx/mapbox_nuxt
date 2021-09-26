<template>
  <div>
    <div>Header</div>
    <my-map />
  </div>
</template>

<script>
import MyMap from '../components/MyMap.vue'
export default {
  name: 'Home',
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
</style>
