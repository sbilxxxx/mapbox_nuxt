<template>
    <div id="map">
      <NuxtLink to="/signIn">go to signIn</NuxtLink>
      <MglMap :accessToken="accessToken" :mapStyle="mapStyle" />
    </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";

export default {
  components: {
    MglMap
  },
  data() {
    return {
      accessToken: 'pk.eyJ1IjoieXVzdWtldGFrYWhhc2hpIiwiYSI6ImNrdHpjb3o2NjF3OHYzM3FuaWFuZDAyb2QifQ.ptOTxfzqzNFHOXtDGwvLwg', // your access token. Needed if you using Mapbox maps
      mapStyle: 'mapbox://styles/mapbox/streets-v8' // your map style
    };
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  }
};
</script>
<style scoped>
#map {
    width: 100%;
    height: 100%;
}
</style>
