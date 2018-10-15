<template>
  <List :items="items" />
</template>

<script>
import store from '@/store/index'
import List from '@/components/List'

export default {
  name: 'GH',
  components: {
    List
  },
  store,
  data: () => ({
    items: [
      {
        title: 'Days PH to payback',
        subtitle: 'Number of days to PH back after GH.',
        type: 'text',
        suffix: 'Days',
        fieldType: 'number',
        min: 1,
        value: 4
      },
      {
        title: 'Percent for recommits',
        subtitle: 'Percentage to recommit after GH',
        type: 'text',
        suffix: '%',
        fieldType: 'number',
        min: 0,
        value: 10
      },
      {
        title: 'Bonus percent for recommits',
        subtitle: 'Percentage of bonus when recommit after bonus',
        type: 'text',
        suffix: '%',
        fieldType: 'number',
        min: 0,
        value: 50
      },
      {
        title: 'Release days',
        subtitle: 'Number of days release shall be made after payment confirmed',
        type: 'text',
        suffix: 'days',
        fieldType: 'number',
        min: 0,
        value: 21
      }
    ]

  }),
  created () {
    store.dispatch('setAppTitle', 'GH Config')
  }
}

</script>

<style scoped>
</style>

