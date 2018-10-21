<template>
  <ConfigList :items="items" />
</template>

<script>
import store from '@/store'
import ConfigList from '@/components/ConfigList'
import config from '@/config'

export default {
  name: 'Main',
  components: {
    ConfigList
  },
  store,
  data () {
    return {
      items: []
    }
  },
  created () {
    store.dispatch('setAppTitle', 'Main Config')
    this.items = config['main']
  }
}

</script>

<style scoped>
</style>

