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
                    <a href="#" class="add-label" data-toggle="modal" data-target="#addLabel">
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
                        <tr v-for="(contact, index) in contacts" @click="contactShow(contact)">
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
            <div :class="['contact-side-panel', {'pull-left-side':sidePanel}]">
                <header>
                    <div class="user-profile">
                        <a href="#" class="user-img">
                            <img v-if="contact.images" :src="contact.image" alt="">
                            <i class="icon-fa icon-fa-user" v-else></i>
                        </a>
                        <h6>{{ selectedContact.name }}</h6>
                    </div>
                    <div class="sidePanel-action">
                        <a href="#">
                            <i class="icon-fa icon-fa-folder"></i>
                        </a>
                        <a href="#">
                            <i class="icon-fa icon-fa-trash"></i>
                        </a>
                        <a href="#" class="close-side-panel" @click="sidePanel = false">
                            <i class="icon-fa icon-fa-remove"></i>
                        </a>
                    </div>
                    <div class="edit" @click="editContact">
                        <button class="btn btn-success edit-btn">
                            <i :class="['icon-im', {'icon-im-pencil':iconPencil, 'icon-im-cross':iconClose}]"></i>
                        </button>
                    </div>
                </header>
                <div class="contact-detail">
                    <form>
                        <div class="form-group row">
                            <label for="email" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" v-if="showInput" v-model="selectedContact.email" >
                                <label class="col-form-label" v-if="viewContact">{{ selectedContact.email }}</label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="phone" class="col-sm-2 col-form-label">Phone</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" v-model="selectedContact.phone" id="phone" 
                                    v-if="showInput">
                                <label class="col-form-label" v-if="viewContact">{{ selectedContact.phone }}</label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="birthday" class="col-sm-2 col-form-label">Birthday</label>
                            <div class="col-sm-10">
                                <input type="date" class="form-control" id="birthday" 
                                    v-model="selectedContact.dob" v-if="showInput" >
                                <label class="col-form-label" v-if="viewContact">{{ selectedContact.dob }}</label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="relation" class="col-sm-2 col-form-label">Relation</label>
                            <div class="col-sm-10">
                                <select class="form-control" v-model="selectedContactLabels"  id="relation"  
                                    v-if="showInput" multiple>
                                    <option v-for="label in labels" :value="label.id" 
                                        :selected="isSelectLabels(label)">
                                        {{ label.name }}
                                    </option>
                                </select>
                                <label class="col-form-label" v-if="viewContact">{{ selectedContact.dob }}</label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="address" class="col-sm-2 col-form-label">Address</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" v-model="selectedContact.address" id="address" 
                                    v-if="showInput">
                                <label class="col-form-label" v-if="viewContact">{{ selectedContact.address }}</label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="url" class="col-sm-2 col-form-label">URL</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" v-model="selectedContact.url" id="url" 
                                v-if="showInput">
                                <label class="col-form-label" v-if="viewContact">{{ selectedContact.url }}</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="col-sm-2 btn btn-theme"  v-if="showInput">
                                Edit 
                            </button>
                        </div>
                    </form>
                </div>
            </div>
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
            <div class="modal fade" id="addContact" ref="contactModel" tabindex="-1" 
                role="dialog" aria-labelledby="addContact" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add New Contact</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form @submit.prevent="contactStore">
                            <div class="modal-body">
                                <div class="form-group">
                                    <input type="text" class="form-control" v-model="contact.name"  
                                    placeholder="Name">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" v-model="contact.phone"  
                                    placeholder="Phone">
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" v-model="contact.email"  
                                    placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <input type="date" class="form-control" 
                                    v-model="contact.dob"   placeholder="Birthday">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" v-model="contact.address"  
                                    placeholder="Address">
                                </div>
                                <div class="form-group ">
                                    <input type="text" class="form-control" v-model="contact.url"  
                                    placeholder="Url">
                                </div>
                                <div class="form-group">
                                    <select class="form-control" v-model="contactLabels" 
                                        multiple>
                                        <option v-for="label in labels" :value="label.id">
                                            {{ label.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Add Contact</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
  data () {
    return {
      pullRightSide: false,
      rightAngle: true,
      leftAngle: false,
      selected: [],
      sidePanel: false,
      viewContact: true,
      showInput: false,
      iconPencil: true,
      iconClose: false,
      label: '',
      labels: '',
      editLabel: false,
      selectedLabel: '',
      showLabel: true,
      contact: {},
      selectedContact: {},
      contactLabels: [],
      selectedContactLabels: [],
      contacts: [
        { 'image': '/assets/admin/img/avatars/avatar2.png',
          'name': 'Tiger Nixon',
          'phone': '4562535851',
          'email': 'tigerNixon@gmail.com'
        },
        {'image': '/assets/admin/img/avatars/avatar1.png',
          'name': 'Garrett Winters',
          'phone': '8525356595',
          'email': 'garrettWinters@gmail.com'
        },
        {'image': '/assets/admin/img/avatars/avatar2.png',
          'name': 'Ashton Cox',
          'phone': '7525356585',
          'email': 'ashtonCox@gmail.com'
        },
        {'image': '/assets/admin/img/avatars/avatar.png',
          'name': 'Cedric Kelly',
          'phone': '1525456585',
          'email': 'cedricKelly@gmail.com'
        },
        {'image': '/assets/admin/img/avatars/avatar2.png',
          'name': 'Airi Satou',
          'phone': '3565458565',
          'email': 'airiSatou@gmail.com'
        },
        {'image': '/assets/admin/img/avatars/avatar1.png',
          'name': 'Brielle Williamson',
          'phone': '6585459515',
          'email': 'brielleWilliamson@gmail.com'
        },
        {'image': '/assets/admin/img/avatars/avatar.png',
          'name': 'Herrod Chandler',
          'phone': '5985456575',
          'email': 'herrodChandler@gmail.com'
        },
        {'image': '/assets/admin/img/avatars/avatar2.png',
          'name': 'Rhona Davidson',
          'phone': '8525356545',
          'email': 'rhonaDavidson@gmail.com'
        }
      ]
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
      self.labels = response.data
    })
    axios.get('/api/admin/apps/contacts/list')
      .then(function (response) {
        self.contacts = response.data
      })
  },
  methods: {
    openLeftSidebar () {
      this.pullRightSide = !this.pullRightSide
      this.rightAngle = !this.rightAngle
      this.leftAngle = !this.leftAngle
    },
    editContact () {
      this.iconPencil = !this.iconPencil
      this.iconClose = !this.iconClose
      this.showInput = !this.showInput
      this.viewContact = !this.viewContact
    },
    labelStore () {
      let self = this
      axios.post('contacts/labels', {'label': this.label})
        .then(function (response) {
          self.labels.push(response.data)
          $(self.$refs.labelModel).modal('hide')
        })
    },
    labelRemove (label, index) {
      let self = this
      if (confirm('Are you sure to remove ' + label.name + ' label!')) {
        axios.delete('contacts/labels/' + label.id, {'label': label})
        .then(function (response) {
          self.labels.splice(index, 1)
        })
      }
    },
    labelUpdate () {
      let self = this
      axios.put('contacts/labels/' + self.selectedLabel.id, {'label': self.selectedLabel.name})
      .then(function (response) {
        self.labels.filter(function (value) {
          if (value.id == self.selectedLabel.id) {
            value.name = self.selectedLabel.name
          }
        })
        self.selectedLabel = false
      })
    },
    contactStore () {
      let self = this
      axios.post('contacts/list', {'contact': self.contact, 'labels': self.contactLabels})
      .then(function (response) {
        $(self.$refs.contactModel).modal('hide')
        self.contacts.push(response.data)
        self.contact = {}
        console.log(response.data)
      })
    },
    contactShow (contact) {
      this.sidePanel = true
      this.selectedContact = contact
    },
    isSelectLabels (label) {
      console.log(this.selectedContact.labels)
      return this.selectedContact.labels.indexOf(label) === -1 ? false : true
    },
    openAddContactModal(){
         this.$parent.openAddContactModal()
    },
  }
}
</script>
