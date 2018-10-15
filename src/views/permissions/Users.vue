<template>
  <v-container fluid>

    <v-dialog v-model="dialog" max-width="500px">
      <v-btn slot="activator" small color="blue-grey white--text" class="add-user">Add user</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 v-if="this.editedIndex !== -1">
                <v-combobox v-model="editedItem.roles" :items="roleItems" label="Roles" multiple chips>
                  <template slot="selection" slot-scope="data">
                    <v-chip :selected="data.selected" :disabled="data.disabled" :key="data.item" class="v-chip--select-multi" @input="data.parent.selectItem(data.item)">
                      <v-avatar class="accent white--text" v-text="data.item.slice(0, 1).toUpperCase()"></v-avatar>
                      {{ data.item }}
                    </v-chip>
                  </template>
                </v-combobox>
              </v-flex>
              <v-flex xs12 sm12 md12>
                <v-text-field v-model="editedItem.first" :rules="[rules.required]" label="First name"></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 md12>
                <v-text-field v-model="editedItem.last" :rules="[rules.required]" label="Last name"></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 md12>
                <v-text-field v-model="editedItem.email" :rules="[rules.required]" label="E-mail"></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 md12>
                <v-text-field v-model="editedItem.phone" mask="phone" :rules="[rules.required]" label="Phone"></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 md12>
                <v-text-field v-model="editedItem.password" :append-icon="showPassword ? 'visibility_off' : 'visibility'" :rules="[rules.required, rules.min]" :type="showPassword ? 'text' : 'password'" label="Password" hint="At least 8 characters" counter @click:append="showPassword = !showPassword"></v-text-field>
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
          <v-icon small class="mr-2" @click="editItem(props.item)" v-if="user.id !== props.item.id">
            edit
          </v-icon>
          <v-icon small @click="deleteItem(props.item)" v-if="user.id !== props.item.id">
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
  name: 'Users',
  store,
  data () {
    return {
      dialog: false,
      pagination: {},
      editedIndex: -1,
      showPassword: false,
      roleItems: [],
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 6 || 'Min 6 characters'
      },
      defaultItem: {
        first: '',
        last: '',
        email: '',
        phone: '',
        password: '',
        roles: []
      },
      editedItem: {
        first: '',
        last: '',
        email: '',
        phone: '',
        password: '',
        roles: []
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
          align: 'center',
          sortable: false
        }
      ],
      items: []
    }
  },
  watch: {
    users () {
      this.items = this.users
    },
    roles () {
      const roleItems = []
      this.roles.map(item => roleItems.push(item.name))
      this.roleItems = roleItems
    },
    userRoles () {
      if (this.userRoles) {
        const rolesList = []
        this.roles.map(role => {
          this.userRoles.map(item => {
            if (item.RoleId === role.id) {
              rolesList.push(role.name)
            }
          })
        })
        this.editedItem.roles = rolesList
      }
      this.dialog = true
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
    newUser () {
      return store.getters.newUser
    },
    users () {
      return store.getters.users
    },
    roles () {
      return store.getters.roles
    },
    userRoles () {
      return store.getters.userRoles
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
    },
    user () {
      return store.getters.user
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
      this.editedItem = Object.assign({ password: '', roles: [] }, item)
      store.dispatch('userRoles', { UserId: item.id })
    },
    deleteItem (item) {
      const confirm = {
        confirm: {
          title: 'Are you sure?',
          text: 'Be cautious as you are deleting a user and this action cannot be undone. Continue with deleting?',
          action: 'deleteUser',
          item: { user: item }
        }
      }
      store.dispatch('getConfirm', confirm)
    },
    save () {
      const user = this.editedItem
      store.dispatch('saveUser', { user: user, isNew: this.editedIndex === -1 })
      if (user.roles.length) {
        const list = []
        user.roles.map(role => {
          const userRole = { UserId: user.id, RoleId: this.roles.find(item => item.name === role).id }
          list.push(userRole)
        })
        store.dispatch('saveUserRole', { userRoles: list })
      }
    }
  },
  created () {
    store.dispatch('users')
    store.dispatch('roles')
    store.dispatch('setAppTitle', 'Users')
  }
}
</script>

<style scoped>
.add-user {
  margin-bottom: 20px;
}
</style>
