<template>
  <v-container fluid>

    <v-data-table :loading="loading" :headers="headers" :items="items" hide-actions class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
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
      pagination: {
        descending: false,
        page: 1,
        rowsPerPage: 10,
        sortBy: null,
        totalItems: 0,
      },
      pages: 0,
      loading: false,
      headers: [
        {
          text: 'Transaction',
          value: 'id',
          align: 'left',
          sortable: false
        },
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
    pagination: {
      handler () {
        store.dispatch('audit', this.pagination.page)
        this.loading = true
      },
      deep: true
    },
    audit () {
      this.pagination.totalItems = this.audit.count
      this.pages = Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      this.items = []
      const audit = this.audit.rows.map(row => {
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
      this.loading = false
    }
  },
  computed: {
    audit () {
      return store.getters.audit
    },
    users () {
      return store.getters.users
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
    store.dispatch('audit', this.pagination.page)
    store.dispatch('setAppTitle', 'Audit')
  }
}
</script>

<style scoped>
.add-role {
  margin-bottom: 20px;
}
</style>
