<template>
  <vue-awesomplete
    :class="{ 'autocomplete-white': !grayStyle, 'autocomplete-gray': grayStyle }"
    :setting="autocompleteData"
    v-on:selectcomplete="onAutocompleteSelect"
    :placeholder="$t('category.input_search')"
    autofocus="true"
    ref="autocomplete" />
</template>

<script>
import { mapGetters } from 'vuex'
import VueAwesomplete from 'vue-awesomplete'
import AwesompleteCss from 'awesomplete/awesomplete.css'

export default {
  name: 'search-bar',
  props: {
    grayStyle: {
      type: Boolean,
      defaultValue: false
    }
  },
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
.autocomplete-white {
  width: 100%;
  box-sizing: border-box;
  margin: 90px auto 0;
  padding: 11px 0 11px 40px;
  font-size: 18px;
  letter-spacing: -0.2px;
  background: white url("../../assets/images/search-icon.svg") no-repeat;
  background-position: 15px 15px;
  box-shadow: 0 2px 14px 0 rgba(0,0,0,0.63), 0 0 4px 0 rgba(0,0,0,0.14);
}
input[type=text]::placeholder {
  font-weight: normal !important;
}

.autocomplete-gray {
  width: 530px;
  height: 100%;
  padding: 11px 15px 11px 40px;
  font-size: 18px;
  letter-spacing: -0.2px;
  background: #F4F4F4 url("../../assets/images/search-icon.svg") no-repeat;
  background-position: 15px 15px;
}

.awesomplete {
  display: block
}
</style>
