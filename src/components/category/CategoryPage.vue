<template>
  <div id="category-page">
    <category-header
      :categoryName="category.name"
      :showFilters="true"
      :categoryId="category.id"
      :selectedFilter="selectedFilter"
      :onFilterChanged="onFilterChanged" />
    <category-foods :categoryId="category.id" />
    <banner-app />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CategoryHeader from '@/components/category/CategoryHeader'
import CategoryFoods from '@/components/category/CategoryFoods'
import BannerApp from '@/components/common/BannerApp'
const filterType = {
  all: 'all',
  authorised: 'empty',
  care: 'careful',
  avoid: 'forbidden'
}

export default {
  name: 'category-page',
  components: { CategoryHeader, CategoryFoods, BannerApp },
  data () {
    return { selectedFilter: filterType.all }
  },
  computed: {
    category () {
      const categoryId = parseInt(this.$route.params.id)
      return this.categories.filter(cat => cat.id === categoryId)[0]
    },
    ...mapGetters({ categories: 'categories' })
  },
  methods: {
    onFilterChanged () {
      console.log('onFilterChanged')
    }
  }
}
</script>

<style lang="scss">
#category-page {
  #banner-app {
    position: fixed;
    bottom: 49px;
    width: 100%;
    padding: 20px 0;
    background: rgba(97,97,97,0.8);
  }
}
</style>
