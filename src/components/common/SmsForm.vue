<template>
  <div id="sms-form">
    <h2>{{formTitle}}</h2>
    <p>{{formSubtitle}}</p>
    <input type="text" :placeholder="$t('banner_app.form.input_text')">
    <input type="submit" :value="$t('banner_app.form.input_submit')">
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

<style>
</style>
