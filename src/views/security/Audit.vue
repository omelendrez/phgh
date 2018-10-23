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
          sortable: false
        },
        {
          text: 'Record #',
          value: 'recordId',
          align: 'left',
          sortable: false
        },
        {
          text: 'Change action',
          value: 'field',
          align: 'left',
          sortable: false
        },
        {
          text: 'Data',
          value: 'value',
          align: 'left',
          sortable: false
        },
        {
          text: 'Who changed?',
          value: 'userId',
          align: 'left',
          sortable: false
        },
        {
          text: 'When?',
          value: 'updatedAt',
          align: 'left',
          sortable: false
        }
      ],
      items: [],
      field: ''
    }
  },
  watch: {
    audit () {
      this.pagination.totalItems = this.audit.length
      this.pagination.rowsPerPage = 10
      const audit = this.audit.map(row => {
        switch (row.model) {
          case 'configs':
            this.getConfigField(row.field)
            row.field = this.field.title
            if (this.field.type === 'switch') {
              row.value = row.value === '1' ? 'Activated' : 'Inactivated'
            } else {
              row.value = `${row.value} ${this.field.suffix || ''}`
            }
            break
          default:
            row.field = row.field.replace('add', 'Added').replace('upd', 'Changed').replace('del', 'Deleted')
            row.value = row.value
        }
        row.userId = this.getUser(row.userId)
        return row
      })
      this.items = audit
    }
  },
  computed: {
    audit () {
      return store.getters.audit
    },
    users () {
      return store.getters.users
    },
    pages () {
      if (!this.pagination.rowsPerPage || !this.items.length) {
        return 0
      } else {
        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    }
  },
  methods: {
    formatDate (date) {
      return moment(date).format('MMMM Do YYYY, h:mm a')
    },
    getConfigField (field) {
      for (var key in config) {
        if (config[key].find(item => item.fieldName === field))
          this.field = config[key].find(item => item.fieldName === field)
      }
    },
    getUser (id) {
      const user = this.users.find(user => user.id === id)
      return `${user.first} ${user.last}`
    }
  },
  created () {
    store.dispatch('users')
    store.dispatch('audit')
    store.dispatch('setAppTitle', 'Audit')
  }
}
</script>

<style scoped>
.add-role {
  margin-bottom: 20px;
}
</style>
