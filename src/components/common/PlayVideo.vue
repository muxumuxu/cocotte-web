<template>
  <div id="play-video">
    <button class="play" v-on:click="playVideo"><img src="../../assets/images/pink-button.svg"></button>
    <p>{{$t('video')}}</p>
    <div id="video-overlay" v-if="displayVideo">
      <button v-on:click="closeVideo"><span class="close"></span></button>
      <iframe
        src="https://player.vimeo.com/video/231192959?color=ff0079&title=0&byline=0&portrait=0&autoplay=1"
        style="position:absolute;top:0;left:0;width:100%;height:100%;"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen>
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'play-video',
  data: () => ({ displayVideo: false }),
  computed: { },
  components: { },
  methods: {
    playVideo () {
      this.displayVideo = true
    },
    closeVideo () {
      this.displayVideo = false
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
    &.play {
      &:hover {
        opacity: 0.8;
      }
    }
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
    display: block;
    .close {
      position: absolute;
      top: 20px;
      left: 20px;
      color: white;
      z-index: 10;
      width: 40px;
      height: 40px;
      background: url(../../assets/images/close.svg) no-repeat 0 0;
      opacity: 0.6;
    }
  }
}

</style>
