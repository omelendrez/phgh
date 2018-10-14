<template>
  <v-container>
    <v-card>
      <v-container>
        Under construction
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import store from '@/store/index'

export default {
  name: 'Time',
  store,
  data: () => ({}),
  created () {
    store.dispatch('setAppTitle', 'Time Config')
  }
}

</script>

<style scoped>
</style>

