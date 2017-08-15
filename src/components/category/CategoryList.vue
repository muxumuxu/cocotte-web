<template>
  <div id="category-list">
    <div class="wrapper">
      <router-link v-for="category in categories" :key="category.id" :to="`/categories/${category.id}`">
        <category-item class="item" :key="category.name" :imageSource="category.coverImage" :categoryTitle="category.name" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CategoryItem from '@/components/category/CategoryItem'

export default {
  name: 'category-list',
  computed: mapGetters({ categories: 'categories' }),
  components: { CategoryItem }
}
</script>

<style>
</style>
