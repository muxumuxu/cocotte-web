<template>
  <div id="category-filters">
    <button class="all active">{{$t('food.status.all')}}</button>
    <button class="authorised">{{$t('food.status.authorised')}}</button>
    <button class="careful">{{$t('food.status.careful')}}</button>
    <button class="forbidden">{{$t('food.status.forbidden')}}</button>
  </div>
</template>

<script>
export default {
  name: 'category-filters',
  components: { },
  methods: { }
}
</script>

<style lang="scss">
#category-filters {
	margin-top: 15px;
	button {
		border: 0;
		opacity: 0.3;
		background: transparent;
		font-size: 16px;
		font-weight: bold;
		padding: 0 10px 10px;
		cursor: pointer;
		&:active {
			opacity: 1;
			box-shadow: 0 -2px 0 0 #FF0079 inset;
		}
		&.authorised {
			padding-left: 35px;
			background: url("../../assets/images/grey-authorised.svg") no-repeat 10px 0px;
			&:active {
				background: url("../../assets/images/authorised.svg") no-repeat 10px 0px;
			}
		}
		&.careful {
			padding-left: 35px;
			background: url("../../assets/images/grey-careful.svg") no-repeat 10px 0px;
			&:active {
				background: url("../../assets/images/careful.svg") no-repeat 10px 0px;
			}
		}
		&.forbidden {
			padding-left: 35px;
			background: url("../../assets/images/grey-forbidden.svg") no-repeat 10px 0px;
			&:active {
				background: url("../../assets/images/forbidden.svg") no-repeat 10px 0px;
			}
		}
	}
}
</style>
