<template>
  <div id="category-header">
    <header>
      <router-link to="/">
        <img src="../../assets/images/logo-black.svg">
      </router-link>
      <search-bar :gray-style="true" />
      <a href="https://itunes.apple.com/fr/app/coach-nourriture-enceinte/id1148406816?&mt=8" target="_blank">
        <img src="../../assets/images/app-store-badge.svg">
      </a>
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
    categoryId: { type: Number },
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
