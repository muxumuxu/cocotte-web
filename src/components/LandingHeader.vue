<template>
  <div id="landing-header">
    <header>
      <div class="logo">
        <img src="../assets/images/logo.svg">
        <span>{{$t('brand')}}</span>
      </div>
      <img src="../assets/images/app-store-badge.svg">
    </header>
    <h1>{{$t('title')}}</h1>
    <input type="search">
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
