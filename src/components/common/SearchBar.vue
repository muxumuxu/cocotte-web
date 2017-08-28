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
      const list = this.foods.map(food => {
        let className = 'background-dropdown-authorised'
        if (food.danger === 'care') {
          className = 'background-dropdown-careful'
        } else if (food.danger === 'avoid') {
          className = 'background-dropdown-forbidden'
        }
        return {
          label: `<div class="${className}">${food.name}</div>`,
          value: food.name
        }
      })
      return { list }
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
  width: 573px;
  box-sizing: border-box;
  margin: 0 auto;
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
  width: 518px;
  height: 100%;
  padding: 11px 15px 11px 40px;
  font-size: 18px;
  letter-spacing: -0.2px;
  background: #F4F4F4 url("../../assets/images/search-icon.svg") no-repeat;
  background-position: 15px 15px;
}

.awesomplete {
  display: block;
}

.awesomplete mark {
  background: white !important;
  color: black !important;
}

.awesomplete > ul {
  padding: 14px 12px !important;
  background: white !important;
  border: none !important;
  box-shadow: 0 2px 14px 0 rgba(0,0,0,0.12), 0 0 4px 0 rgba(0,0,0,0.14) !important;
  border-radius: 3px !important;
  margin-top: 5px !important;
  font-size: 18px !important;
  transition: none !important;
}

.awesomplete > ul > li {
  padding: 0 !important;
  margin-bottom: 12px !important;
  color: #969696 !important;
  display: flex;
}

.awesomplete > ul > li:hover {
  background: transparent !important;
}

.awesomplete > ul > li:hover mark {
  background: white !important;
}

.awesomplete > ul > li:last-child {
  margin-bottom: 0 !important;
}

.awesomplete > ul:before {
  display: none !important;
}

.background-dropdown-authorised {
  height: 20px;
  padding: 3px 0 0 25px;
  background: url("../../assets/images/authorised.svg") no-repeat 0px 2px;
}

.background-dropdown-careful {
  height: 20px;
  padding: 3px 0 0 25px;
  background: url("../../assets/images/careful.svg") no-repeat -1px 3px;
}

.background-dropdown-forbidden {
  height: 20px;
  padding: 3px 0 0 25px;
  background: url("../../assets/images/forbidden.svg") no-repeat 0px 2px;
}
</style>
