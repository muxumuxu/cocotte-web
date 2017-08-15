<template>
  <div id="category-header">
    <header>
      <router-link to="/">
          <div class="logo">
            <img src="../assets/images/logo.svg">
            <span>{{$t('brand')}}</span>
          </div>
        </router-link>
      <input type="search" placeholder="Rechercher un aliment" autofocus>
      <a href="https://itunes.apple.com/fr/app/coach-nourriture-enceinte/id1148406816?&mt=8" target="_blank">
        <img src="../assets/images/app-store-badge.svg">
      </a>
    </header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'category-header',
  computed: mapGetters({ categories: 'categories' }),
  components: { },
  methods: { }
}
</script>

<style>
</style>
