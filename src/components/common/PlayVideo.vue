<template>
  <div id="play-video">
    <button id="play-button" v-on:click="playVideo"><img src="../../assets/images/pink-button.svg"></button>
    <p>{{$t('video')}}</p>
    <div id="video-overlay">
      <iframe src="https://player.vimeo.com/video/231192959?color=ff0079&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
import Player from '@vimeo/player'

export default {
  name: 'play-video',
  computed: { },
  components: { },
  methods: {
    playVideo () {
      const player = new Player('handstick', {
        id: 231192959
      })
      const button = document.getElementById('play-button')
      const video = document.getElementById('video-overlay')

      button.click(function () {
        video.classList.add('play')
        player.api('play')
      })
    }
  }
}
</script>

<style lang="scss">
#play-video {
  padding: 25px 0;
  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
  p {
    color: white;
    opacity: 0.6;
    font-size: 13px;
    font-weight: bold;
    margin-top: 5px;
  }
  iframe {
    position: absolute;
    left: 0;
    top: 0;
  }
  #video-overlay {
    background: black;
    position: fixed;
    z-index: 9;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}

</style>
