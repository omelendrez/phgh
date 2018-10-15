<template>
  <v-container>
    <v-list two-line>
      <template v-for="(item, index) in items">
        <v-list-tile :key="index" avatar ripple @click="">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-switch v-if="item.type==='switch'" color="blue" v-model="item.value"></v-switch>
            <v-text-field class="input-field" v-if="item.type==='text'" :mask="item.mask" :min="item.min" :suffix="item.suffix" :type="item.fieldType" v-model="item.value"></v-text-field>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
      </template>
    </v-list>
  </v-container>
</template>

<script>
import store from '@/store/index'

export default {
  name: 'Finance',
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

