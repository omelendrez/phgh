<template>
  <ConfigList :items="items" />
</template>

<script>
import store from '@/store'
import ConfigList from '@/components/ConfigList'
import config from '@/config'

export default {
  name: 'GH',
  components: {
    ConfigList
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

