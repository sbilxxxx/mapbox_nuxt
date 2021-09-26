<template>
  <div id="app">
    <my-map />
    <NuxtLink to="/CameraPage">本人確認カメラ</NuxtLink>
  </div>
</template>

<script>
import MyMap from '../components/MyMap.vue'
export default {
  name: 'app',
  components: {
    'my-map': MyMap,
  },
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
