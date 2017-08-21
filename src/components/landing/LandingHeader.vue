<template>
  <div id="landing-header">
    <header>
      <router-link to="/">
        <img src="../../assets/images/logo-white.svg">
      </router-link>
      <a href="https://itunes.apple.com/fr/app/coach-nourriture-enceinte/id1148406816?&mt=8" target="_blank">
        <img src="../../assets/images/app-store-badge.svg">
      </a>
    </header>
    <div class="wrapper">
      <h1>{{$t('title')}}</h1>
      <vue-awesomplete
        id="autocomplete"
        :setting="autocompleteData"
        v-on:selectcomplete="onAutocompleteSelect"
        autofocus="true"
        ref="autocomplete" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VueAwesomplete from 'vue-awesomplete'
import AwesompleteCss from 'awesomplete/awesomplete.css'

export default {
  name: 'landing-header',
  computed: {
    foods () {
      return [].concat.apply([], this.categories.map(category => category.foods))
    },
    autocompleteData () {
      return { list: this.foods.map(food => food.name) }
    },
    ...mapGetters({ categories: 'categories' })
  },
  components: { VueAwesomplete, AwesompleteCss },
  methods: {
    onAutocompleteSelect: function () {
      const foodName = this.$refs.autocomplete.internalValue
      const matched = this.foods.filter(food => food.name === foodName)
      if (matched.length > 0) {
        const food = matched[0]
        this.$router.push(`/categories/${food.categoryId}/foods/${food.id}`)
      }
    }
  }
}
</script>

<style lang="scss">
#landing-header {
  background: url("../../assets/images/header-background.jpg") no-repeat;
  background-size: cover;
  padding: 20px;
	h1 {
		width: 345px;
	}
	#autocomplete {
	  width: 100%;
	  display: block;
	  margin: 90px auto 0;
	  padding: 11px 0 11px 40px;
	  font-size: 18px;
	  letter-spacing: -0.2px;
	  background: white url("../../assets/images/search-icon.svg") no-repeat;
	  background-position: 15px 15px;
		box-shadow: 0 2px 14px 0 rgba(0,0,0,0.63), 0 0 4px 0 rgba(0,0,0,0.14);
	}
  .awesomplete {
    display: block
  }
}
</style>
