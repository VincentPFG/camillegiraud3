<template>
  <div>
    <h1>test</h1>
    <p>{{ test.foo }} {{ foo }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const test = await $content('test').fetch()
    return { test, foo: 'bar' }
  },
}
</script>
