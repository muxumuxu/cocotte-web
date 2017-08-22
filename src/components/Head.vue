<template>
</template>

<script>
data: function () {
  return {
    title: 'My Title'
  }
},
// Usage with context the component 
head: {
  // To use "this" in the component, it is necessary to return the object through a function
  title: function () {
    return {
      inner: this.title
    }
  },
  meta: [
    { name: 'description', content: 'My description', id: 'desc' }
  ]
}
  ...
}
</script>

<style>
</style>
