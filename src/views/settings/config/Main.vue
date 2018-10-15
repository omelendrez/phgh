<template>
  <List :items="items" />
</template>

<script>
import store from '@/store/index'
import List from '@/components/List'

export default {
  name: 'Main',
  components: {
    List
  },
  store,
  data () {
    return {
      items: [
        {
          title: 'Aplication Active',
          subtitle: "Here is were you can put the application Offline.",
          type: 'switch',
          value: true
        },
        {
          title: 'Application freeze',
          subtitle: "This will freeze the application until unfrozen.",
          type: 'switch',
          value: false
        },
        {
          title: 'Upload ID cards to verify clients',
          subtitle: 'This switch makes mandatory the uploade ID cards for account confirmation.',
          type: 'switch',
          value: false
        },
        {
          title: 'Upload bank statement to verify user accounts',
          subtitle: 'This switch makes mandatory upload bank statement for account verification',
          type: 'switch',
          value: true
        },
        {
          title: 'Blocked users tickets',
          subtitle: 'Limit of days a blocked user should be ticketed.',
          type: 'text',
          suffix: 'Days',
          fieldType: 'number',
          min: 1,
          value: 4
        }
      ]
    }
  },
  created () {
    store.dispatch('setAppTitle', 'Main Config')
  }
}

</script>

<style scoped>
</style>

