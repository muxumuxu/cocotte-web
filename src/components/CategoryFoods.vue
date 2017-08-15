<template>
  <div id="category-foods">
    <div class="wrapper">
      <h1>Catégorie <span>Boissons</span></h1>
      <div class="filters">
        <button class="all active">Tous</button>
        <button class="authorised">Autorisé</button>
        <button class="careful">Faire attention</button>
        <button class="forbidden">Dangereux</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'category-foods',
  computed: mapGetters({ categories: 'categories', foods: 'foods' }),
  components: { },
  methods: { }
}
</script>

<style>
</style>
