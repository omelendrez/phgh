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
      { title: 'Aplication', value: 'OK', color: '#356859', flex:  2 },
      { title: 'Database', value: 'OK', color: '#356859', flex:  2 },
      { title: 'PH Amount', value: 'NGN 1,621,765', color: '#344955', flex: 3 },
      { title: 'GH Amount', value: 'NGN 1,442,089', color: '#344955', flex: 3 },
      { title: 'Bitcoins for PH', value: 'NGN 432,200', color: '#4a6572', flex: 3 },
      { title: 'Bitcoins for GH', value: 'NGN 440,523', color: '#4a6572', flex: 3 },
      { title: 'Transactions', value: '932', color: '#356859', flex: 2 },
      { title: 'Blocked participants', value: '83', color: '#356859', flex: 2 }
    ]
  }),
  created () {
    store.dispatch('setAppTitle', 'Dashboard')
  }
}

</script>

<style scoped>
</style>

