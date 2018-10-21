<template>
  <v-container>
    <v-list three-line>
      <template v-for="(item, index) in itemsList">
        <v-list-tile :key="index" avatar ripple>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-switch v-if="item.type==='switch'" color="green" v-model="item.value" @change="changed(item)"></v-switch>
            <v-text-field class="input-field" v-if="item.type==='text'" :mask="item.mask" :min="item.min" :suffix="item.suffix" :type="item.fieldType" v-model="item.value" @change="changed(item)"></v-text-field>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
      </template>
    </v-list>
    <Alert :title="title" :message="message" :close="hideAlert" />
  </v-container>
</template>

<script>
import Alert from './Alert'
import store from '@/store'

export default {
  name: 'ConfigList',
  props: ['items'],
  store,
  components: {
    Alert
  },
  data: () => ({
    itemsList: [],
    title: '',
    message: '',
    alerted: true
  }),
  computed: {
    config () {
      return store.getters.config
    }
  },
  watch: {
    items () {
      this.itemsList = this.items
    },
    config () {
      const list = this.itemsList
      const config = this.config[0]
      for (const field in config) {
        const value = config[field]
        list.map(item => {
          if (item.fieldName === field) {
            item.value = value
          }
        })
      }
      this.itemsList = list
    }
  },
  methods: {
    hideAlert () {
      this.title = ''
      this.message = ''
    },
    changed (item) {
      const { fieldName, value } = item
      store.dispatch('updateConfig', { fieldName: fieldName, value: value })
    },
  },
  created () {
    store.dispatch('loadConfig')
    this.itemsList = this.items
  }
}
</script>
