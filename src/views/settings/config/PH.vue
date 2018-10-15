<template>
  <List :items="items" />
</template>

<script>
import store from '@/store/index'
import List from '@/components/List'
import config from '@/config'

export default {
  name: 'PH',
  components: {
    List
  },
  store,
  data: () => ({
    items: []
  }),
  created () {
    store.dispatch('setAppTitle', 'PH Config')
    this.items = config['ph']
  }
}

</script>

<style scoped>
</style>

