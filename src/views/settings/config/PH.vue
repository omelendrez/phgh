<template>
  <div>PH Config</div>
</template>

<script>
import store from '@/store/index'

export default {
  name: 'Main',
  store,
  data: () => ({}),
  created () {
    store.dispatch('setAppTitle', 'PH Config')
  }
}

</script>

<style scoped>

</style>

