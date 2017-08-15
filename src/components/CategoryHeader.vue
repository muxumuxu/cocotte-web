<template>
  <div id="category-header">
    <header>
      <router-link to="/">
          <div class="logo">
            <img src="../assets/images/logo.svg">
            <span>{{$t('brand')}}</span>
          </div>
        </router-link>
      <input type="search" :placeholder="$t('category.input_search')" autofocus>
      <a href="https://itunes.apple.com/fr/app/coach-nourriture-enceinte/id1148406816?&mt=8" target="_blank">
        <img src="../assets/images/app-store-badge.svg">
      </a>
    </header>
    <div class="wrapper">
      <h1>{{$t('category.title')}} <span>Boissons</span></h1>
      <div class="filters">
        <button class="all active">{{$t('category.filters.all')}}</button>
        <button class="authorised">{{$t('category.filters.authorised')}}</button>
        <button class="careful">{{$t('category.filters.careful')}}</button>
        <button class="forbidden">{{$t('category.filters.forbidden')}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'category-header',
  components: { },
  methods: { }
}
</script>

<style>
</style>
