<template>
  <v-container>
    <h1>Main Config</h1>
  </v-container>
</template>

<script>
import store from '@/store/index'

export default {
  name: 'Main',
  store,
  data: () => ({}),
  created () {
    store.dispatch('setAppTitle', 'Main Config')
  }
}

</script>

<style scoped>
</style>

