<template>
  <div id="landing-header">
    <header>
      <router-link to="/">
        <img src="../../assets/images/logo-white.svg">
      </router-link>
      <a href="https://itunes.apple.com/fr/app/coach-nourriture-enceinte/id1148406816?&mt=8" target="_blank">
        <img src="../../assets/images/app-store-badge.svg">
      </a>
    </header>
    <div class="wrapper">
      <h1>{{$t('title')}}</h1>
      <search-bar />
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/common/SearchBar'

export default {
  name: 'landing-header',
  components: { SearchBar }
}
</script>

<style lang="scss">
#landing-header {
  background: url("../../assets/images/header-background.jpg") no-repeat;
  background-size: cover;
  padding: 20px;
	h1 {
		width: 345px;
	}
}
</style>
