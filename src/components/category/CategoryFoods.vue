<template>
  <div id="category-foods">
    <div class="wrapper">

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FoodItem from '@/components/food/FoodItem'
export default {
  name: 'category-foods',
  computed: mapGetters({ categories: 'categories', foods: 'foods' }),
  components: { FoodItem },
  methods: { }
}
</script>

<style>
</style>
