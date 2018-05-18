<template>
  <div v-cloak class="row contact-box">
    <div :class="{'pull-right-side': pullRightSide }" class="contact-sidebar">
      <div class="total-contacts">
        <a href="#">
          <i class="icon-fa icon-fa-address-book"/>
          All Contacts
          <span>68</span>
        </a>
      </div>
      <div class="contact-label">
        <h5 class="section-semi-title">LABELS</h5>
        <ul>
          <li v-for="(label, index) in labels" :key="index">
            <div v-if="(label.id != selectedLabel.id)" class="label-display">
              {{ label.name }}
              <span>{{ label.total }}</span>
              <div class="label-action">
                <a href="#" @click="selectedLabel = label">
                  <i class="icon-fa icon-fa-edit"/>
                </a>
                <a href="#" @click="labelRemove(label, index)">
                  <i class="icon-fa icon-fa-trash"/>
                </a>
              </div>
            </div>
            <div v-else-if="(label.id == selectedLabel.id)" class="label-edit">
              <input
                v-model="selectedLabel.name"
                type="text"
                class="form-control pull-left col-md-8"
              >
              <div class="label-action">
                <a href="#" @click="labelUpdate">
                  <i class="icon-fa icon-fa-pencil"/>
                </a>
                <a href="#" @click="selectedLabel = false">
                  <i class="icon-fa icon-fa-remove"/>
                </a>
              </div>
            </div>
          </li>
        </ul>
        <a href="#" class="add-label" @click="openAddLabelModal">
          <i class="icon-fa icon-fa-plus"/>
          Add New Label
        </a>
      </div>
      <a class="left-sidebar-btn" @click="openLeftSidebar">
        <i :class="['icon-fa', {'icon-fa-angle-right':rightAngle, 'icon-fa-angle-left':leftAngle}]"/>
      </a>
    </div>
    <div class="contact-list">
      <div class="contact-list-action clearfix">
        <div class="btn-group pull-left" role="group">
          <div class="action1" role="group">
            <button
              id="allAction"
              type="button"
              class="btn btn-light"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="icon-fa icon-fa-folder"/>
            </button>
            <div class="dropdown-menu" aria-labelledby="allAction">
              <a v-for="label in labels" :key="label.id" class="dropdown-item" href="#">
                {{ label.name }}
              </a>
              <div class="dropdown-divider"/>
              <a class="dropdown-item" href="#">Trash</a>
              <a class="dropdown-item" href="#">Spam</a>
            </div>
          </div>
          <div class="action2" role="group">
            <button
              id="onlyLabel"
              type="button"
              class="btn btn-light"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="icon-fa icon-fa-tag"/>
            </button>
            <div class="dropdown-menu" aria-labelledby="onlyLabel">
              <a v-for="label in labels" :key="label.id" class="dropdown-item" href="#">
                {{ label.name }}
              </a>
            </div>
          </div>
          <div class="action2" role="group">
            <button type="button" class="btn btn-outline-default" @click="openAddContactModal">
              Add Contact
            </button>
          </div>
        </div>
        <div class="right-action pull-right">
          <button
            id="more"
            type="button"
            class="btn btn-light dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            More
          </button>
          <div class="dropdown-menu" aria-labelledby="more">
            <a class="dropdown-item" href="#">More</a>
            <a class="dropdown-item" href="#">More</a>
          </div>
          <button type="button" class="btn btn-outline-default">
            Empty All
          </button>
          <div class="contact-search">
            <input
              id="search"
              type="text"
              class="form-control"
              placeholder="Search ..."
            >
          </div>
        </div>
      </div>
      <table class="table table-hover" cellspacing="0" width="100%">
        <thead>
          <tr>
            <th>
              <div class="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  v-model="selectAll"
                  type="checkbox"
                  class="custom-control-input"
                >
                <label class="custom-control-label" for="selectAll"/>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(contact, index) in contacts" :key="index" @click="contactShow(contact)" >
            <td>
              <div class="custom-control custom-checkbox" @click.stop>
                <input
                  :id="index"
                  v-model="selected"
                  :value="contact"
                  type="checkbox"
                  class="custom-control-input selectable-item" >
                <label :for="index" class="custom-control-label" />
              </div>
            </td>
            <td>
              <a href="#">
                <img :src="contact.image" alt="">
              </a>
              {{ contact.name }}
            </td>
            <td>{{ contact.phone }}</td>
            <td>{{ contact.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <show-contact-modal :side-panel="sidePanel" @close="closeContactModal"/>
    <add-contact-label ref="label"/>
    <add-contact-modal ref="contact"/>
  </div>
</template>
<script>
import AddContactModal from './AddContactModal'
import AddContactLabel from './AddLabelModal'
import ShowContactModal from './ShowContactModal'
export default {
  components: {
    AddContactModal,
    ShowContactModal,
    AddContactLabel
  },
  data () {
    return {
      pullRightSide: false,
      rightAngle: true,
      leftAngle: false,
      selected: [],
      sidePanel: false,
      label: '',
      labels: [],
      editLabel: false,
      selectedLabel: '',
      showLabel: true,
      contact: {},
      selectedContact: {},
      contactLabels: [],
      contacts: []
    }
  },
  computed: {
    selectAll: {
      get: function () {
        return this.contacts
          ? this.selected.length === this.contacts.length
          : false
      },
      set: function (value) {
        var selected = []

        if (value) {
          this.contacts.forEach(function (contact) {
            selected.push(contact)
          })
        }
        this.selected = selected
      }
    }
  },
  watch: {
    labels () {
      let self = this
      self.$children[2].labels = self.labels
    }
  },
  mounted () {
    let self = this
    axios.get('/api/admin/apps/contacts/labels/').then(function (response) {
      self.labels = self.$children[0].labels = response.data
    })
    this.getContacts()
  },
  methods: {
    getContacts () {
      let self = this
      axios.get('/api/admin/apps/contacts/list').then(function (response) {
        self.contacts = response.data
      })
    },

    openAddContactModal () {
      this.$refs.contact.openModal()
    },
    openAddLabelModal () {
      this.$refs.label.openModal()
    },
    closeContactModal () {
      this.sidePanel = false
    },

    openLeftSidebar () {
      this.pullRightSide = !this.pullRightSide
      this.rightAngle = !this.rightAngle
      this.leftAngle = !this.leftAngle
    },

    labelRemove (label, index) {
      let self = this
      if (confirm('Are you sure to remove ' + label.name + ' label!')) {
        axios.delete('/api/admin/apps/contacts/labels/' + label.id, {
          label: label
        })
          .then(function (response) {
            self.labels.splice(index, 1)
            self.getContacts()
          })
      }
    },
    labelUpdate () {
      let self = this
      axios.put('/api/admin/apps/contacts/labels/' + self.selectedLabel.id, {
        label: self.selectedLabel.name
      })
        .then(function (response) {
          self.labels.filter(function (value) {
            if (value.id === self.selectedLabel.id) {
              value.name = self.selectedLabel.name
            }
          })
          self.selectedLabel = false
        })
    },

    contactShow (contact) {
      this.sidePanel = true
      this.$children[0].contact.labels = contact.labels
      this.$children[0].contact.id = contact.id
      this.$children[0].contact.img = contact.image
      this.$children[0].contact.name = contact.name
      this.$children[0].contact.phone = contact.phone
      this.$children[0].contact.email = contact.email
      this.$children[0].contact.address = contact.address
      this.$children[0].contact.dob = contact.dob
      this.$children[0].contact.labels = contact.labels
      this.$children[0].contact.url = contact.url
    }
  }
}
</script>
