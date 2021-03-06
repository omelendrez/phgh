<template>
  <v-container fluid>

    <v-dialog v-model="dialog" max-width="500px">
      <v-btn slot="activator" small color="blue-grey white--text" class="add-role">Add role</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm12 md12>
                <v-text-field v-model="editedItem.name" :rules="[rules.required]" label="Role name"></v-text-field>
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
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.name }}</td>
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
    </v-data-table>
    <div class="text-xs-center pt-2">
      <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
    </div>

  </v-container>
</template>

<script>
import moment from 'moment'
import store from '@/store'

export default {
  name: 'Roles',
  store,
  data () {
    return {
      dialog: false,
      pagination: {},
      editedIndex: -1,
      showPassword: false,
      rules: {
        required: value => !!value || 'Required.'
      },
      defaultItem: {
        name: ''
      },
      editedItem: {
        name: ''
      },
      headers: [
        {
          text: 'ID',
          value: 'id',
          align: 'left',
          sortable: false
        },
        {
          text: 'Name',
          value: 'name',
          align: 'left',
          sortable: true
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
          align: 'center',
          sortable: false
        }
      ],
      items: []
    }
  },
  watch: {
    roles () {
      this.pagination.totalItems = this.roles.length
      this.items = this.roles
    },
    dialog (val) {
      val || this.close()
    },
    newRole () {
      store.dispatch('roles')
      this.close()
    }
  },
  computed: {
    newRole () {
      return store.getters.newRole
    },
    roles () {
      return store.getters.roles
    },
    pages () {
      if (!this.pagination.rowsPerPage || !this.items.length) {
        return 0
      } else {
        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    },
    formTitle () {
      return this.editedIndex === -1 ? 'Add Role' : 'Edit Role'
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
      const confirm = {
        confirm: {
          title: 'Are you sure?',
          text: 'Be cautious as you are deleting a role and this action cannot be undone. Continue with deleting?',
          action: 'deleteRole',
          item: { role: item }
        }
      }
      store.dispatch('getConfirm', confirm)
    },
    save () {
      store.dispatch('saveRole', { role: this.editedItem, isNew: this.editedIndex === -1 })
    }
  },
  created () {
    store.dispatch('roles')
    store.dispatch('setAppTitle', 'Roles')
  }
}
</script>

<style scoped>
.add-role {
  margin-bottom: 20px;
}
</style>
