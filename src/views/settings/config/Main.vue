<template>
  <List :items="items" />
</template>

<script>
import store from '@/store'
import List from '@/components/List'
import config from '@/config'

export default {
  name: 'Main',
  components: {
    List
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

