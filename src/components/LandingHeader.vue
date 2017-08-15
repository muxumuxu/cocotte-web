<template>
  <div id="landing-header">
    <header>
      <router-link to="/">
        <div class="logo">
          <img src="../assets/images/logo.svg">
          <span>{{$t('brand')}}</span>
        </div>
      </router-link>
      <a href="https://itunes.apple.com/fr/app/coach-nourriture-enceinte/id1148406816?&mt=8" target="_blank">
        <img src="../assets/images/app-store-badge.svg">
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

<style>
</style>
