<template>
  <div id="landing-header">
    <header>
      <router-link to="/">
        <img src="../../assets/images/logo-white.svg">
      </router-link>
      <div>
        <a href="https://muxu.gift/alimentation-enceinte-google-play" target="_blank" rel="noopener" class="google-play">
          <img src="../../assets/images/google-play-badge.svg">
        </a>
        <a href="https://muxu.gift/alimentation-enceinte-app-store" target="_blank" rel="noopener">
          <img src="../../assets/images/app-store-badge.svg">
        </a>
      </div>
    </header>
    <div class="wrapper">
      <h1>{{$t('title')}}</h1>
      <play-video />
      <search-bar :gray-style="false" />
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/common/SearchBar'
import PlayVideo from '@/components/common/PlayVideo'

export default {
  name: 'landing-header',
  components: { SearchBar, PlayVideo }
}
</script>

<style lang="scss">
#landing-header {
  background: url("../../assets/images/header-background.jpg") #000 no-repeat;
  background-size: cover;
  padding: 20px;
  text-align: center;
  a.google-play {
    margin-right: 10px;
  }
}
</style>
