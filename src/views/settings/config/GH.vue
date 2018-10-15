<template>
  <List :items="items" />
</template>

<script>
import store from '@/store'
import List from '@/components/List'
import config from '@/config'

export default {
  name: 'GH',
  components: {
    List
  },
  store,
  data: () => ({
    items: []
  }),
  created () {
    store.dispatch('setAppTitle', 'GH Config')
    this.items = config['gh']
  }
}

</script>

<style scoped>
</style>

