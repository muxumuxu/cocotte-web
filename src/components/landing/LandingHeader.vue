<template>
  <div id="landing-header">
    <header>
      <router-link to="/">
        <div class="logo">
          <img src="../../assets/images/logo.svg">
          <span>{{$t('brand')}}</span>
        </div>
      </router-link>
      <a href="https://itunes.apple.com/fr/app/coach-nourriture-enceinte/id1148406816?&mt=8" target="_blank">
        <img src="../../assets/images/app-store-badge.svg">
      </a>
    </header>
    <div class="wrapper">
      <h1>{{$t('title')}}</h1>
      <input type="search" autofocus>
    </div>
  </div>
</template>

<script>
export default {
  name: 'landing-header',
  computed: { },
  components: { },
  methods: { }
}
</script>

<style lang="scss">
#landing-header {
  background: #000000 url("../../assets/images/header-background.png") no-repeat;
  background-size: cover;
  padding: 20px;
	h1 {
		width: 345px;
	}
	input[type=search] {
	  width: 100%;
	  display: block;
	  margin: 90px auto 0;
	  padding: 11px 0 11px 40px;
	  font-size: 18px;
	  letter-spacing: -0.2px;
	  background: white url("../../assets/images/search-icon.svg") no-repeat;
	  background-position: 15px 15px;
		box-shadow: 0 2px 14px 0 rgba(0,0,0,0.63), 0 0 4px 0 rgba(0,0,0,0.14);
	}
}
</style>
