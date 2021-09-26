<template>
  <div>
    <div>this is a Sign in page</div>
    <amplify-authenticator id="app">
      <NuxtLink to="/MapPage">go to map</NuxtLink>
      <amplify-greetings></amplify-greetings>
    </amplify-authenticator>
  </div>
</template>

<script>
import MyMap from './MyMap.vue'
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
