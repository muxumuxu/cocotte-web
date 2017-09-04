<template>
  <div id="category-page">
    <category-header
      :category-name="category.name"
      :show-filters="true"
      :category-id="category.id"
      :selected-filter="selectedFilter"
      :on-filter-changed="onFilterChanged" />
    <category-foods :category-id="category.id" :filter-by="selectedFilter" />
    <banner-app v-if="!userHasCloseBanner" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CategoryHeader from '@/components/category/CategoryHeader'
import CategoryFoods from '@/components/category/CategoryFoods'
import BannerApp from '@/components/common/BannerApp'

export default {
  name: 'category-page',
  components: { CategoryHeader, CategoryFoods, BannerApp },
  data () {
    return { selectedFilter: 'all' }
  },
  computed: {
    category () {
      const categoryId = parseInt(this.$route.params.id)
      const matched = this.categories.filter(cat => cat.id === categoryId)
      if (matched.length > 0) {
        return matched[0]
      }
      this.$router.push('/404')
    },
    ...mapGetters({
      categories: 'categories',
      userHasCloseBanner: 'userHasCloseBanner'
    })
  },
  methods: {
    onFilterChanged ({ filter }) {
      this.selectedFilter = filter
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
