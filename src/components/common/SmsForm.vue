<template>
  <div id="sms-form">
    <h2>{{$t('banner_app.title')}}</h2>
    <p>{{$t('banner_app.get_app')}}</p>
    <input type="text" :placeholder="$t('banner_app.form.input_text')">
    <input type="submit" :value="$t('banner_app.form.input_submit')">
  </div>
</template>

<script>
export default {
  name: 'sms-form',
  computed: { },
  components: { },
  methods: { }
}
</script>

<style>
</style>
