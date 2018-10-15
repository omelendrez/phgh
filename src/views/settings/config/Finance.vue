<template>
  <List :items="items" />
</template>

<script>
import store from '@/store/index'
import List from '@/components/List'

export default {
  name: 'Finance',
  components: {
    List
  },
  store,
  data: () => ({
    items: [
      {
        title: 'Limit days of amount growth',
        subtitle: 'Setting limit of days for growth.',
        type: 'text',
        suffix: 'Days',
        fieldType: 'number',
        min: 1,
        value: 30
      },
      {
        title: 'Initial direct referral bonus percent',
        subtitle: 'Percent of direct referral bonus for first time',
        type: 'text',
        suffix: '%',
        fieldType: 'number',
        min: 0,
        value: 10
      },
      {
        title: 'Referrals for bonus',
        subtitle: 'Number of referrals to be entitled for bonuses',
        type: 'text',
        fieldType: 'number',
        min: 1,
        value: 50
      },
      {
        title: 'Level 2 referral bonus',
        subtitle: 'Percent of 2nd level referral bonus',
        type: 'text',
        suffix: '%',
        fieldType: 'number',
        min: 0,
        value: 2
      },
      {
        title: 'Level 3 referral bonus',
        subtitle: 'Percent of 3rd level referral bonus',
        type: 'text',
        suffix: '%',
        fieldType: 'number',
        min: 0,
        value: 2
      },
      {
        title: 'Next levels referral bonus',
        subtitle: 'Percent for next of level referral bonus',
        type: 'text',
        suffix: '%',
        fieldType: 'number',
        min: 0,
        value: 0.5
      },
      {
        title: 'Automatic matching ',
        subtitle: 'Payment matching is done by the system',
        type: 'switch',
        value: true
      },
      {
        title: 'Manual matching',
        subtitle: 'Payment matching is done by the Admins',
        type: 'switch',
        value: false
      },
      {
        title: 'Automatic & manual matching',
        subtitle: 'Payment done automatic and by Admins',
        type: 'switch',
        value: false
      },
      {
        title: 'Show total amounts in dashboard',
        subtitle: 'This allows the Admins to block the totals from the dashboard',
        type: 'switch',
        value: true
      }
    ]
  }),
  created () {
    store.dispatch('setAppTitle', 'Finance Config')
  }
}
</script>

<style scoped>
</style>
