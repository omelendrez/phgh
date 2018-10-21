<template>
  <ConfigList :items="items" />
</template>

<script>
import store from '@/store'
import ConfigList from '@/components/ConfigList'
import config from '@/config'

export default {
  name: 'Finance',
  components: {
    ConfigList
  },
  store,
  data: () => ({
    items: []
  }),
  created () {
    store.dispatch('setAppTitle', 'Finance Config')
    this.items = config['finance']
  }
}
</script>

<style scoped>
</style>
