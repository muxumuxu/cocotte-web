<template>
  <div id="sms-form">
    <h2>{{formTitle}}</h2>
    <p>{{formSubtitle}}</p>
    <input type="text" class="sms-input" :placeholder="$t('banner_app.form.input_text')">
    <input type="submit" class="btn-submit" :value="$t('banner_app.form.input_submit')">
  </div>
</template>

<script>
export default {
  name: 'sms-form',
  computed: { },
  components: { },
  props: ['formTitle', 'formSubtitle'],
  methods: { }
}
</script>

<style lang="scss">
#sms-form {
	margin: 20px 0 0 25px;
	p {
		font-size: 13px;
		opacity: 0.6;
		color: white;
		font-weight: bold;
		margin: 20px 0 10px;
	}
}

.sms-input {
	padding: 8px 15px;
	font-size: 16px;
	font-weight: bold;
}

input[type=text]::placeholder {
	opacity: 0.5;
	font-weight: bold;
	color: black;
}

.btn-submit {
	background: #FF0079;
	color: white;
	font-weight: bold;
	padding: 9px 15px;
	font-size: 16px;
	line-height: 16px;
	transition: opacity .3s;
	cursor: pointer;
	&:hover {
		opacity: 0.7;
	}
}
</style>
