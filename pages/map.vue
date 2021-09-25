<template>
  <div>
    <div id=”map”></div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import mapboxgl from 'mapbox-gl'

export default {
  data(){
    return {
      access_token: 'pk.eyJ1IjoieXVzdWtldGFrYWhhc2hpIiwiYSI6ImNrdHpjb3o2NjF3OHYzM3FuaWFuZDAyb2QifQ.ptOTxfzqzNFHOXtDGwvLwg',
      map:{},
    }
  },
  mounted(){
    this.createMap()
  },
  methods:{
    createMap(){
      mapboxgl.access_Token = this.access_token
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 11,
        centet: [107.61861, -6.90389]
      })
    }
  }
}
</script>
