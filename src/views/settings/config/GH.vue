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
  name: 'GH',
  store,
  data: () => ({}),
  created () {
    store.dispatch('setAppTitle', 'GH Config')
  }
}

</script>

<style scoped>
</style>

