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
  name: 'GH',
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

