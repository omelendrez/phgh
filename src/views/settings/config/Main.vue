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
            <v-text-field v-if="item.type==='text'" :mask="item.mask" :min="item.min" :suffix="item.suffix" :type="item.fieldType" v-model="item.value"></v-text-field>
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
  name: 'Main',
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
          title: 'Daily Grow',
          subtitle: 'Set percent of daily growth.',
          type: 'text',
          suffix: '%',
          fieldType: 'number',
          mask: '##',
          min: 1,
          value: 1
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

