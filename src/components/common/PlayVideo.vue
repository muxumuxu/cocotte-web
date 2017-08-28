<template>
  <div id="play-video">
    <button v-on:click="playVideo"><img src="../../assets/images/pink-button.svg"></button>
    <p>{{$t('video')}}</p>
    <div id="video-overlay">
      <button v-on:click="closeVideo"><span class="close"></span></button>
      <iframe src="https://player.vimeo.com/video/231192959?color=ff0079&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'play-video',
  computed: { },
  components: { },
  methods: {
    playVideo () {
      const video = document.getElementById('video-overlay')
      video.classList.add('play')
    },
    closeVideo () {
      const video = document.getElementById('video-overlay')
      video.classList.remove('play')
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
    display: none;
    &.play {
      display: block;
    }
    .close {
      position: absolute;
      top: 20px;
      left: 20px;
      color: white;
      z-index: 10;
      width: 40px;
      height: 40px;
      background: url(../../assets/images/close.svg) no-repeat 0 0;
      cursor: pointer;
      opacity: 0.6;
      transition: .3s opacity linear;
    }
  }
}

</style>
