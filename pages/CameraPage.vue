<template>
  <div id="camera">
    <video ref="video" id="video" v-show="is_open" autoplay></video>
    <button color="info" id="snap" v-on:click="start()">カメラを開く</button>
    <button color="info" id="snap" v-on:click="capture()">
      本人確認を行う
    </button>
    <div v-show="is_match">
      <img
        src="https://www.nin-fan.net/tool/image/4h21r.gif"
        alt="it's a match!!!"
      />
    </div>
    <canvas
      ref="canvas"
      id="canvas"
      v-show="false"
      width="500"
      height="500"
    ></canvas>
    <NuxtLink to="/MapPage">go to map</NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: {},
      canvas: {},
      captures: [],
      url: 'https://75ondqb90l.execute-api.ap-northeast-1.amazonaws.com/dev/image_auth',
      xhr: new XMLHttpRequest(),
      is_match: false,
      is_open: true,
      //   is_match: false,
    }
  },

  methods: {
    start() {
      this.is_open = true
      this.video = this.$refs.video
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
          this.video.srcObject = stream
          this.video.play()
        })
      }
    },

    capture() {
      this.canvas = this.$refs.canvas
      this.canvas.getContext('2d').drawImage(this.video, 0, 0, 500, 500)
      this.captures.push(this.canvas.toDataURL('image/png'))
      console.log(this.captures)

      this.xhr.open('POST', this.url)
      this.xhr.setRequestHeader(
        'content-type',
        'application/x-www-form-urlencoded;charset=UTF-8'
      )
      this.xhr.send('UserName=' + 'Ben&ImageBase64=' + this.captures)

      this.xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          this.is_match = JSON.parse(JSON.parse(this.responseText).similarity)
          console.log(this.is_match)
          console.log(typeof this.is_match)
        }
      }
      this.is_match = true
      this.captures = []
      function sleep(waitMsec) {
        var startMsec = new Date()
        while (new Date() - startMsec < waitMsec);
      }

      sleep(3000)
      this.is_open = false
      console.log(typeof this.is_open)
    },
  },
}
</script>