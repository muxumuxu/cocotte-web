<template>
  <div id="category-list">
    <category-item v-for="category in categories" :categoryTitle="category.name" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CategoryItem from '@/components/CategoryItem'

export default {
  name: 'category-list',
  computed: mapGetters({ categories: 'categories' }),
  components: { CategoryItem },
  methods: {
  }
}
</script>

<style>
</style>
