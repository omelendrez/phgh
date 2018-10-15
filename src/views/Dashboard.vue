<template>
  <Dash :items="cards" />
</template>

<script>
import store from '@/store'
import Dash from '@/components/Dash'

export default {
  name: 'Dashboard',
  components: {
    Dash
  },
  store,
  data: () => ({
    cards: [
      { title: 'System', value: 'OK', color: '#344955', flex: 4 },
      { title: 'Aplication', value: 'OK', color: '#4a6572', flex: 4 },
      { title: 'Database', value: 'OK', color: '#356859', flex: 4 },
      { title: 'Amount in the system', value: 'NGN 3,456,789', color: '#344955', flex: 3 },
      { title: 'Bitcoins', value: 'NGN 456,789', color: '#4a6572', flex: 3 },
      { title: 'Transactions', value: '932', color: '#356859', flex: 3 },
      { title: 'Blocked participants', value: '83', color: '#344955', flex: 3 }
    ]
  }),
  created () {
    store.dispatch('setAppTitle', 'Dashboard')
  }
}

</script>

<style scoped>
</style>

