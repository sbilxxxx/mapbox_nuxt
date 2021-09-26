<template>
  <div>
    <!-- <amplify-authenticator id="app"> -->
    <div class="area">
      <NuxtLink class="block" to="/MapPage">GO TO MAP</NuxtLink>
    </div>
    <div class="cont" id="container">
      <p>Choose your avatar!</p>
      <div class="avatars">
        <table>
          <tr>
            <td>
              <img
                id="selected"
                src="https://1.bp.blogspot.com/-LZL7jGWmL3Q/X-FcwoOnE2I/AAAAAAABdEs/qUrY1ClrQrMukkdaEnZK8-Bdob7mOdmQgCNcBGAsYHQ/s1307/onepiece13_crocodile.png"
                width="200"
                height="200"
              />
            </td>
            <td>
              <img
                src="https://1.bp.blogspot.com/-WoPLgzbefuw/X-FcxFa-YjI/AAAAAAABdE0/42S9V3wWi400mGKLEiB_pQT-dqTKT28kwCNcBGAsYHQ/s1156/onepiece14_enel.png"
                width="200"
                height="200"
              />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://1.bp.blogspot.com/-HPG_x7XPky8/X-FctLTLkKI/AAAAAAABdEE/xs4T8m0FiBAFptXHGQhQ2c9ZmVWtaeQSgCNcBGAsYHQ/s1028/onepiece05_sanji.png"
                width="200"
                height="200"
              />
            </td>
            <td>
              <img
                src="https://1.bp.blogspot.com/-VACf4WfKNOk/X-Fcx7DWraI/AAAAAAABdE8/KT0UudaIHrMtbFvjC02yLuPLNBZurGYpQCNcBGAsYHQ/s1103/onepiece17_doflamingo.png"
                width="200"
                height="200"
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- <amplify-greetings></amplify-greetings> -->
    <!-- </amplify-authenticator> -->
  </div>
</template>

<script>
import MyMap from './MyMap.vue'
export default {
  name: 'Home',
  components: {
    'my-map': MyMap,
  },
}
</script>

<style>
.area {
  background: gold;
  padding: 1em 1em;
  border: black 2px solid;
  text-decoration: none;
  color: black;
  font-size: 1.5em;
  font-family: sans-serif;
}

#container {
  max-width: 960px;
  margin: 0 auto;
}

.cont p {
  text-align: center;
  font-size: 30px;
}
#selected {
  border: 5px solid #00cc00;
}
.block {
  display: block;
  width: 150px;
  margin: 0 auto;
}

.avatars table {
  margin: auto;
  padding: auto;
  list-style: none;
  align-items: center;
}
.avatars img {
  width: 100%;
  margin: auto;
  padding: auto;
}

amplify-greetings.button {
  text-align: center;
}
#app {
  height: 100vh;
}
</style>
