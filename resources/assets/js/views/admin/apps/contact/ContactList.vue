<template>
     <div class="row contact-box" v-cloak>
            <div class="contact-sidebar" :class="{'pull-right-side': pullRightSide }">
                <div class="total-contacts">
                    <a href="#">
                        <i class="icon-fa icon-fa-address-book"></i>
                        All Contacts
                        <span>68</span>
                    </a>
                </div>
                <div class="contact-label">
                    <h5 class="section-semi-title">LABELS</h5>
                    <ul>
                        <li v-for="(label, index) in labels"> 
                            <div class="label-display" v-if="(label.id != selectedLabel.id)">
                                {{ label.name }}
                                <span>{{ label.total }}</span>
                                <div class="label-action">
                                    <a href="#" @click="selectedLabel = label">
                                        <i class="icon-fa icon-fa-edit"></i>
                                    </a>
                                    <a href="#" @click="labelRemove(label, index)">
                                        <i class="icon-fa icon-fa-trash"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="label-edit" v-else="(label.id == selectedLabel.id)">
                                <input type="text" class="form-control pull-left col-md-8" 
                                v-model="selectedLabel.name">
                                <div class="label-action">
                                    <a href="#" @click="labelUpdate">
                                        <i class="icon-fa icon-fa-pencil"></i>
                                    </a>
                                    <a href="#" @click="selectedLabel = false">
                                        <i class="icon-fa icon-fa-remove"></i>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <a href="#" class="add-label" @click="openAddLabelModal">
                        <i class="icon-fa icon-fa-plus"></i> Add New Label
                    </a>
                </div>
                <a class="left-sidebar-btn" @click="openLeftSidebar">
                    <i  :class="['icon-fa', {'icon-fa-angle-right':rightAngle, 'icon-fa-angle-left':leftAngle}]"></i>
                </a>
            </div>
            <div class="contact-list">
                <div class="contact-list-action clearfix">
                    <div class="btn-group pull-left" role="group">
                        <div class="action1" role="group">
                            <button id="allAction" type="button" class="btn btn-light" 
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="icon-fa icon-fa-folder"></i>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="allAction">
                                <a v-for="label in labels" class="dropdown-item" href="#">
                                    {{ label.name }}
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Trash</a>
                                <a class="dropdown-item" href="#">Spam</a>
                            </div>
                        </div>
                        <div class="action2" role="group">
                            <button id="onlyLabel" type="button" class="btn btn-light" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i class="icon-fa icon-fa-tag"></i>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="onlyLabel">
                                <a v-for="label in labels" class="dropdown-item" href="#">
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
                        <button id="more" type="button" class="btn btn-light dropdown-toggle" 
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                            <input type="text" class="form-control" id="search" placeholder="Search ...">
                        </div>
                    </div>
                </div>
                <table class="table table-hover" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" v-model="selectAll" class="custom-control-input" 
                                    id="selectAll">
                                    <label class="custom-control-label" for="selectAll"></label>
                                </div>
                            </th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(contact, index) in contacts" @click="contactShow(contact)" >
                            <td>
                                <div class="custom-control custom-checkbox" @click.stop>
                                    <input type="checkbox" v-model="selected" :value="contact"
                                    class="custom-control-input selectable-item" :id="index">
                                    <label class="custom-control-label" :for="index"></label>
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
           
            <show-contact-modal/>
            
            <add-contact-label  ref="label"/> 
            <div class="modal fade" id="addLabel" ref="labelModel" tabindex="-1" 
                role="dialog" aria-labelledby="addContactLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add New Label</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form @submit="labelStore">
                            <div class="modal-body">
                                <div class="form-group row">
                                    <div class="col-sm-12">
                                        <input type="text" class="form-control" v-model="label"  placeholder="Enter New Label">
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          <add-contact-modal ref="contact"/>
          
        </div>
</template>
<script>
import AddContactModal from './AddContactModal'
import AddContactLabel from './AddLabelModal'
import ShowContactModal from './ShowContactModal'
export default {
    components:{
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
      labels: '',
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
        return this.contacts ? this.selected.length === this.contacts.length : false
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
  mounted () {

    let self = this
    axios.get('/api/admin/apps/contacts/labels/')
    .then(function (response) {
      self.labels = self.$children[0].labels = response.data
      
    })
    this.getContacts()
  },
  methods: {
      getContacts() {
        let self = this
        axios.get('/api/admin/apps/contacts/list')
        .then(function (response) {
            self.contacts = response.data
        })
      },
    openAddContactModal() {
        this.$refs.contact.openModal()
    },
    openAddLabelModal() {
        this.$refs.label.openModal()
    },
    

    openLeftSidebar () {
      this.pullRightSide = !this.pullRightSide
      this.rightAngle = !this.rightAngle
      this.leftAngle = !this.leftAngle
    },
    
    labelStore () {
      let self = this
      axios.post('contacts/labels', {'label': this.label})
        .then(function (response) {
          self.labels.push(response.data)
          self.$children[0].labels.push(response.data)
          $(self.$refs.labelModel).modal('hide')
        })
    },
    labelRemove (label, index) {
      let self = this
      if (confirm('Are you sure to remove ' + label.name + ' label!')) {
        axios.delete('/api/admin/apps/contacts/labels/' + label.id, {'label': label})
        .then(function (response) {
          self.labels.splice(index, 1)
        })
      }
    },
    labelUpdate () {
      let self = this
      axios.put('/api/admin/apps/contacts/labels/' + self.selectedLabel.id, {'label': self.selectedLabel.name})
      .then(function (response) {
        self.labels.filter(function (value) {
          if (value.id == self.selectedLabel.id) {
            value.name = self.selectedLabel.name
          }
        })
        self.selectedLabel = false
      })
    },

    contactShow (contact) {
      this.$children[0].sideBox = true
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
    },
   

  }
}
</script>
