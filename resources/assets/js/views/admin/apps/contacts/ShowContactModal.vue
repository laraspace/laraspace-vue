<template>
  <div v-click-outside="closeModal" :class="['contact-side-panel', {'pull-left-side':sidePanel}]" >
    <header>
      <div class="user-profile">
        <a href="#" class="user-img">
          <img v-if="contact.images" :src="contact.image" alt="">
          <i v-else class="icon-fa icon-fa-user"/>
        </a>
        <h6>{{ contact.name }}</h6>
      </div>
      <div class="sidePanel-action">
        <a href="#">
          <i class="icon-fa icon-fa-folder"/>
        </a>
        <a href="#" @click="removeContact">
          <i class="icon-fa icon-fa-trash"/>
        </a>
        <a href="#" class="close-side-panel" @click="sidePanel = false">
          <i class="icon-fa icon-fa-remove"/>
        </a>
      </div>
      <div class="edit" @click="editContact">
        <button class="btn btn-success edit-btn">
          <i :class="['icon-im', {'icon-im-pencil':iconPencil, 'icon-im-cross':iconClose}]"/>
        </button>
      </div>
    </header>
    <div class="contact-detail">
      <form @submit.prevent="updateContact">
        <div class="form-group row">
          <label for="name" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input
              v-if="showInput"
              v-model="contact.name"
              type="text"
              class="form-control"
            >
            <label v-if="viewContact" class="col-form-label">{{ contact.name }}</label>
          </div>
        </div>
        <div class="form-group row">
          <label for="email" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input
              v-if="showInput"
              v-model="contact.email"
              name="email"
              type="text"
              class="form-control"
            >
            <label v-if="viewContact" class="col-form-label">{{ contact.email }}</label>
          </div>
        </div>
        <div class="form-group row">
          <label for="phone" class="col-sm-2 col-form-label">Phone</label>
          <div class="col-sm-10">
            <input
              v-if="showInput"
              id="phone"
              v-model="contact.phone"
              name="phone"
              type="text"
              class="form-control"
            >
            <label v-if="viewContact" class="col-form-label">{{ contact.phone }}</label>
          </div>
        </div>
        <div class="form-group row">
          <label for="birthday" class="col-sm-2 col-form-label">Birthday</label>
          <div class="col-sm-10">
            <input
              v-if="showInput"
              id="birthday"
              v-model="contact.dob"
              type="date"
              name="dob"
              class="form-control ls-datepicker"
            >
            <label v-if="viewContact" class="col-form-label">
              {{ contact.dob }}
            </label>
          </div>
        </div>
        <div class="form-group row">
          <label for="relation" class="col-sm-2 col-form-label">Relation</label>
          <div class="col-sm-10">
            <multiselect
              v-if="showInput"
              v-model="contact.labels"
              :options="labels"
              :multiple="true"
              track-by="id"
              label="name"
            />
            <label
              v-for="label in contact.labels"
              v-if="viewContact"
              :key="label.id"
              class="col-form-label"
            >
              {{ label.name }}
            </label>
          </div>
        </div>
        <div class="form-group row">
          <label for="address" class="col-sm-2 col-form-label">Address</label>
          <div class="col-sm-10">
            <input
              v-if="showInput"
              id="address"
              v-model="contact.address"
              type="text"
              class="form-control"
            >
            <label v-if="viewContact" class="col-form-label">
              {{ contact.address }}
            </label>
          </div>
        </div>
        <div class="form-group row">
          <label for="url" class="col-sm-2 col-form-label">URL</label>
          <div class="col-sm-10">
            <input
              v-if="showInput"
              id="url"
              v-model="contact.url"
              type="text"
              class="form-control"
            >
            <label v-if="viewContact" class="col-form-label" >
              {{ contact.url }}
            </label>
          </div>
        </div>
        <div class="form-group">
          <button v-if="showInput" type="submit" class="col-sm-2 btn btn-theme">
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Multiselect from 'vue-multiselect'
export default {
  components: {
    Multiselect
  },
  props: {
    sidePanel: {
      type: Boolean,
      require: true,
      default: false
    }
  },

  data () {
    return {
      contact: {
        id: '',
        img: '',
        name: '',
        phone: '',
        email: '',
        address: '',
        dob: '',
        labels: '',
        url: ''
      },
      contactData: [],

      showInput: false,
      iconPencil: true,
      iconClose: false,
      viewContact: true,
      labels: [],
      selectedLabels: [],
      labelData: [],
      labelsId: []
    }
  },
  watch: {
    contactData (value) {
      this.contact = value
    }
  },
  methods: {
    editContact () {
      this.iconPencil = !this.iconPencil
      this.iconClose = !this.iconClose
      this.showInput = !this.showInput
      this.viewContact = !this.viewContact
    },
    async updateContact () {
      await axios.put('/api/admin/apps/contacts/list/' + this.contact.id, this.contact)
      this.sidePanel = false
      this.editContact()
      this.$parent.getContacts()
    },
    async removeContact () {
      if (confirm('Are you sure to remove ' + self.contact.name + ' Contact!')) {
        await axios.delete('/api/admin/apps/contacts/list/' + self.contact.id, {'contact': self.contact})
        this.sidePanel = false
        this.$parent.contacts.splice(self.$parent.contacts.indexOf(self.contact), 1)
      }
    },
    closeModal () {
      if (this.sidePanel) {
        this.$emit('close')
      }
    }
  }
}
</script>
