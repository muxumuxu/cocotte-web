<template>
  <div id="category-list">
    <div class="wrapper">
      <router-link v-for="category in categories" :key="category.id" :to="`/categories/${category.id}`">
        <category-item
        class="item"
        :key="category.name"
        :category="category" />
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

<style lang="scss">
#category-list {
	padding-bottom: 50px;
	.wrapper {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin-top: 20px;
		a {
		  width: 105px;
			margin: 0 12px 30px 0;
			text-decoration: none;
		}
	}
}
</style>
