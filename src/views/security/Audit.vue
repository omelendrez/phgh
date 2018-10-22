<template>
  <v-container fluid>

    <v-data-table :headers="headers" :items="items" :pagination.sync="pagination" hide-actions class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.model }}</td>
        <td>{{ props.item.recordId }}</td>
        <td>{{ props.item.field }}</td>
        <td>{{ props.item.value }}</td>
        <td>{{ props.item.userId }}</td>
        <td>{{ formatDate(props.item.updatedAt) }}</td>
      </template>
    </v-data-table>
    <div class="text-xs-center pt-2">
      <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
    </div>

  </v-container>
</template>

<script>
import moment from 'moment'
import store from '@/store'
import config from '@/config'
window.config = config

export default {
  name: 'Audit',
  store,
  data () {
    return {
      pagination: {},
      headers: [
        {
          text: 'Table',
          value: 'model',
          align: 'left',
          sortable: true
        },
        {
          text: 'Record',
          value: 'recordId',
          align: 'left',
          sortable: true
        },
        {
          text: 'Field',
          value: 'field',
          align: 'left',
          sortable: true
        },
        {
          text: 'Value',
          value: 'value',
          align: 'left',
          sortable: true
        },
        {
          text: 'Who?',
          value: 'userId',
          align: 'left',
          sortable: true
        },
        {
          text: 'When?',
          value: 'updatedAt',
          align: 'left',
          sortable: false
        }
      ],
      items: []
    }
  },
  watch: {
    audit () {
      const audit = this.audit.map(row => {
        switch(row.model) {
          case: 'configs':
            row.field =
          break
          default:

        }
      })


      this.items = this.audit
    }
  },
  computed: {
    audit () {
      return store.getters.audit
    },
    pages () {
      if (!this.pagination.rowsPerPage || !this.items.length) {
        return 0
      } else {
        this.pagination.totalItems = this.items.length
        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    }
  },
  methods: {
    formatDate (date) {
      return moment(date).fromNow()
    }
  },
  created () {
    store.dispatch('audit')
    store.dispatch('setAppTitle', 'Audit')
  },
  getFieldName(field) {

  }
}
</script>

<style scoped>
.add-role {
  margin-bottom: 20px;
}
</style>
