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
      <category-filters v-if="showFilters" />
    </div>
  </div>
</template>

<script>
import CategoryFilters from '@/components/CategoryFilters'
export default {
  name: 'category-header',
  props: ['showFilters'],
  components: { CategoryFilters },
  methods: { }
}
</script>

<style>
</style>
