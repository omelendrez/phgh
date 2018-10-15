<template>
  <v-container>
    <v-list three-line>
      <template v-for="(item, index) in itemsList">
        <v-list-tile :key="index" avatar ripple @click="notImplemented">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-switch v-if="item.type==='switch'" color="green" v-model="item.value"></v-switch>
            <v-text-field class="input-field" v-if="item.type==='text'" :mask="item.mask" :min="item.min" :suffix="item.suffix" :type="item.fieldType" v-model="item.value"></v-text-field>
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

export default {
  name: 'List',
  props: ['items'],
  components: {
    Alert
  },
  data: () => ({
    itemsList: [],
    title: '',
    message: '',
    alerted: false
  }),
  watch: {
    items () {
      this.itemsList = this.items
    }
  },
  methods: {
    notImplemented () {
      if (!this.alerted) {
        this.title = 'To be implemented'
        this.message = 'You can play with the switchs and values and this does not have any effect on the system. This is just a front-end functionality that will be later on connected to the backend and you will be able to update the actual values in the database. But for the time being you are free to play with it as nothing wrong will happen.'
        this.alerted = true
      }
    },
    hideAlert () {
      this.title = ''
      this.message = ''
    }
  },
  created () {
    this.itemsList = this.items
  }
}
</script>
