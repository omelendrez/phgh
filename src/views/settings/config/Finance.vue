<template>
  <List :items="items" />
</template>

<script>
import store from '@/store'
import List from '@/components/List'
import config from '@/config'

export default {
  name: 'Finance',
  components: {
    List
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
