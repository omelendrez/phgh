<template>
  <ConfigList :items="items" />
</template>

<script>
import store from '@/store'
import ConfigList from '@/components/ConfigList'
import config from '@/config'

export default {
  name: 'PH',
  components: {
    ConfigList
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

