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
  name: 'PH',
  store,
  data: () => ({}),
  created () {
    store.dispatch('setAppTitle', 'PH Config')
  }
}

</script>

<style scoped>
</style>

