<template>
  <div id="category-header">
    <header>
      <router-link to="/">
        <img src="../../assets/images/logo-black.svg">
      </router-link>
      <search-bar :gray-style="true" />
      <div>
        <a href="https://muxu.gift/cocotte-app-google-play" target="_blank" rel="noopener" class="google-play">
          <img src="../../assets/images/google-play-badge.svg">
        </a>
        <a href="https://muxu.gift/cocotte-app-app-store" target="_blank" rel="noopener">
          <img src="../../assets/images/app-store-badge.svg">
        </a>
      </div>
    </header>
    <div class="wrapper">
      <router-link v-if="categoryName" :to="`/categories/${categoryId}`">
        <h1>{{$t('category.title')}} <span>{{ categoryName }}</span></h1>
        <category-filters v-if="showFilters"
          :selected-filter="selectedFilter"
          :on-filter-changed="onFilterChanged" />
      </router-link>
      <h1 v-if="categoryHeaderTitle">{{categoryHeaderTitle}}</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SearchBar from '@/components/common/SearchBar'
import CategoryFilters from '@/components/category/CategoryFilters'

export default {
  name: 'category-header',
  props: {
    showFilters: { type: Boolean },
    categoryName: { type: String },
    categoryId: { type: String },
    categoryHeaderTitle: { type: String },
    selectedFilter: { type: String },
    onFilterChanged: { type: Function, default: () => {} }
  },
  computed: mapGetters({ categories: 'categories' }),
  components: { CategoryFilters, SearchBar }
}
</script>

<style lang="scss">
#category-header {
	box-shadow: 0 0 2px 0 rgba(0,0,0,0.21);
	position: fixed;
	width: 100%;
	background: white;
	header {
		padding: 20px 20px 15px;
		span {
			color: black;
		}
	}
	.wrapper {
	  a {
	    text-decoration: none;
	  }
		h1 {
			font-size: 32px;
			color: black;
			letter-spacing: -0.34px;
			margin: 0;
			text-align: left;
			padding-bottom: 15px;
			span {
				opacity: 0.3;
				margin-left: 5px;
			}
		}
	}
}
</style>
