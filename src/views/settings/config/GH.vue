<template>
  <div>GH Config</div>
</template>

<script>
import store from '@/store/index'

export default {
  name: 'Main',
  store,
  data: () => ({}),
  created () {
    store.dispatch('setAppTitle', 'GH Config')
  }
}

</script>

<style scoped>

</style>

