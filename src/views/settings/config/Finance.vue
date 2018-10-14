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
  name: 'Finance',
  store,
  data: () => ({}),
  created () {
    store.dispatch('setAppTitle', 'Finance Config')
  }
}

</script>

<style scoped>
</style>

