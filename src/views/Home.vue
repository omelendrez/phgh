<template>
  <v-container class="home">
    Welcome to Give Help + Provide Help App"
  </v-container>
</template>

<script>
// @ is an alias to /src
import store from '@/store'

export default {
  name: 'home',
  store,
  created () {
    if (!store.getters.isAuthenticated) {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
