<template>
  <div id="category-foods">
    <div class="wrapper">
      <h1>Catégorie <span>Boissons</span></h1>
      <div class="filters">
        <button>Tous</button>
        <button>Autorisés</button>
        <button>À éviter</button>
        <button>Dangereux</button>
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
