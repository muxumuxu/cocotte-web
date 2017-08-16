<template>
  <div id="category-header">
    <header>
      <router-link to="/">
          <div class="logo">
            <img src="../../assets/images/logo.svg">
            <span>{{$t('brand')}}</span>
          </div>
        </router-link>
      <input type="search" :placeholder="$t('category.input_search')" autofocus>
      <a href="https://itunes.apple.com/fr/app/coach-nourriture-enceinte/id1148406816?&mt=8" target="_blank">
        <img src="../../assets/images/app-store-badge.svg">
      </a>
    </header>
    <div class="wrapper">
      <h1>{{$t('category.title')}} <span>{{ categoryName }}</span></h1>
      <category-filters v-if="showFilters" />
    </div>
  </div>
</template>

<script>
import CategoryFilters from '@/components/category/CategoryFilters'
export default {
  name: 'category-header',
  props: ['showFilters', 'categoryName'],
  components: { CategoryFilters },
  methods: { }
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
		input[type=search] {
			width: 800px;
			height: 100%;
			padding: 11px 0 11px 40px;
		  font-size: 18px;
		  letter-spacing: -0.2px;
		  background: #F4F4F4 url("../../assets/images/search-icon.svg") no-repeat;
		  background-position: 15px 15px;
		}
	}
	.wrapper {
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
