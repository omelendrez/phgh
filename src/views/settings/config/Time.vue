<template>
  <div>Time Config</div>
</template>

<script>
import store from '@/store/index'

export default {
  name: 'Main',
  store,
  data: () => ({}),
  created () {
    store.dispatch('setAppTitle', 'Time Config')
  }
}

</script>

<style scoped>

</style>

