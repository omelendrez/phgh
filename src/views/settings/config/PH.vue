<template>
  <List :items="items" />
</template>

<script>
import store from '@/store/index'
import List from '@/components/List'

export default {
  name: 'PH',
  components: {
    List
  },
  store,
  data: () => ({
    items: [
      {
        title: 'Minimum PH',
        subtitle: 'Minimum amount for a PH.',
        type: 'text',
        suffix: 'NGN',
        fieldType: 'number',
        value: 5000
      },
      {
        title: 'Maximum PH',
        subtitle: 'Maximum amount for a PH.',
        type: 'text',
        suffix: 'NGN',
        fieldType: 'number',
        value: 500000
      },
      {
        title: 'Growth Percent Initial',
        subtitle: 'Precentage of daily growth.',
        type: 'text',
        suffix: '%',
        fieldType: 'number',
        value: 1
      },
      {
        title: 'Growth Percent Recommitment',
        subtitle: 'Precentage of daily growth for recommitments.',
        type: 'text',
        suffix: '%',
        fieldType: 'number',
        value: 1
      },
      {
        title: 'Percent for Admins',
        subtitle: 'Percent to be paid to admins.',
        type: 'text',
        suffix: '%',
        fieldType: 'number',
        min: 1,
        value: 5
      },
      {
        title: 'Time limit to pay admins',
        subtitle: 'Time limit for payment to admins.',
        type: 'text',
        suffix: 'Hours',
        fieldType: 'number',
        min: 1,
        value: 48
      },
      {
        title: 'Allow cash',
        subtitle: 'Allow PH to be made in cash',
        type: 'switch',
        value: true
      },
      {
        title: 'Allow bitcoins',
        subtitle: 'Allow PH to be made with bitcoins',
        type: 'switch',
        value: true
      },
      {
        title: 'Allow multiple PH',
        subtitle: 'Allow user to make more than 1 PH',
        type: 'switch',
        value: true
      },
      {
        title: 'Message to PH',
        subtitle: 'Text to be sent to the PH when is time to pay.',
        type: 'text',
        fieldType: 'text',
        value: 'You have an order please make payment'
      },
      {
        title: 'Message to GH',
        subtitle: 'Text to be sent to the GH payment by PH is done.',
        type: 'text',
        fieldType: 'text',
        value: 'You have a paid order please confirm'
      }
    ]

  }),
  created () {
    store.dispatch('setAppTitle', 'PH Config')
  }
}

</script>

<style scoped>
</style>

