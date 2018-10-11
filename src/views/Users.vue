<template>
  <v-container fluid>
    <v-dialog v-model="dialog" max-width="500px">
      <v-btn slot="activator" color="blue-grey white--text">Add user</v-btn>

      <v-card>

        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>

        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm12 md12>
                <v-text-field v-model="editedItem.first" label="First name"></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 md12>
                <v-text-field v-model="editedItem.last" label="Last name"></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 md12 v-if="!isEditing">
                <v-text-field v-model="editedItem.email" label="email"></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 md12 v-if="!isEditing">
                <v-text-field v-model="editedItem.phone" label="phone"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>

    <v-data-table :headers="headers" :items="items" :pagination.sync="pagination" hide-actions class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.first }}</td>
        <td>{{ props.item.last }}</td>
        <td>{{ props.item.email }}</td>
        <td>{{ props.item.phone }}</td>
        <td>{{ formatDate(props.item.createdAt) }}</td>
        <td>{{ formatDate(props.item.updatedAt) }}</td>
        <td class="justify-center layout pt-2">
          <v-icon small class="mr-2" @click="editItem(props.item)">
            edit
          </v-icon>
          <v-icon small @click="deleteItem(props.item)">
            delete
          </v-icon>
        </td>
      </template>
      <template slot="no-data">
        <v-icon color="error">cancel</v-icon> Sorry, nothing to display here
      </template>
    </v-data-table>
    <div class="text-xs-center pt-2">
      <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
    </div>

    <Snack v-bind:message="alertMessage" />

  </v-container>
</template>

<script>
import moment from 'moment'
import Snack from '@/components/Snack';
import store from '@/store/index'

export default {
  name: 'Users',
  store,
  components: {
    Snack
  },
  data () {
    return {
      dialog: false,
      pagination: {},
      editedIndex: -1,
      alertMessage: '',
      defaultItem: {
        first: '',
        last: '',
        email: '',
        phone: ''
      },
      editedItem: {
        first: '',
        last: '',
        email: '',
        phone: ''
      },
      headers: [
        {
          text: 'First',
          value: 'first',
          align: 'left',
          sortable: true
        },
        {
          text: 'Last',
          value: 'last',
          align: 'left',
          sortable: true
        },
        {
          text: 'E-mail',
          value: 'email',
          align: 'left',
          sortable: false
        },
        {
          text: 'Phone',
          value: 'phone',
          align: 'left',
          sortable: false
        },
        {
          text: 'Created',
          value: 'createdAt',
          align: 'left',
          sortable: false
        },
        {
          text: 'Changed',
          value: 'updatedAt',
          align: 'left',
          sortable: false
        },
        {
          text: 'Actions',
          value: 'name',
          align: 'cener',
          sortable: false
        }
      ],
      items: []
    }
  },
  watch: {
    apiError () {
      this.alertMessage = this.apiError ? this.apiError.data.error : ''
    },
    users () {
      this.items = this.users
    },
    dialog (val) {
      val || this.close()
    },
    newUser () {
      store.dispatch('users')
      this.close()
    }
  },
  computed: {
    apiError () {
      return store.getters.apiError
    },
    newUser () {
      return store.getters.newUser
    },
    users () {
      return store.getters.users
    },
    pages () {
      if (!this.pagination.rowsPerPage || !this.items.length) {
        return 0
      } else {
        this.pagination.totalItems = this.items.length
        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    },
    formTitle () {
      return this.editedIndex === -1 ? 'Add User' : 'Edit User'
    },
    isEditing () {
      return this.editedIndex !== -1
    }
  },
  methods: {
    formatDate (date) {
      return moment(date).fromNow()
    },
    close () {
      this.dialog = false
      store.dispatch('users')
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    editItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem (item) {
      const index = this.items.indexOf(item)
      confirm('Are you sure you want to delete this user?') && this.items.splice(index, 1)
    },
    save () {
      if (this.editedIndex === -1) {
        store.dispatch('addUser', { user: this.editedItem, isNew: this.editedIndex === -1 })
      }
    }
  },
  created () {
    store.dispatch('users')
    store.dispatch('setAppTitle', 'Users')
  }
}
</script>

<style scoped>

</style>
