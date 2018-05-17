<template>
  <sweet-modal ref="modal">
    <form @submit.prevent="contactStore">
      <div class="form-group row">
        <label for="inputEmailTo" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input
            id="inputEmailTo"
            v-model="contact.name"
            type="text"
            class="form-control"
          >
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPhone" class="col-sm-2 col-form-label">Phone</label>
        <div class="col-sm-10">
          <input
            id="inputPhone"
            v-model="contact.phone"
            type="text"
            class="form-control"
          >
        </div>
      </div>
      <div class="form-group row">
        <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input
            id="inputEmail"
            v-model="contact.email"
            type="email"
            class="form-control"
          >
        </div>
      </div>
      <div class="form-group row">
        <label for="inputDob" class="col-sm-2 col-form-label">Birth Date</label>
        <div class="col-sm-10">
          <input
            id="inputDob"
            v-model="contact.dob"
            type="date"
            class="form-control"
          >
        </div>
      </div>
      <div class="form-group row">
        <label
          for="inputAddress"
          class="col-sm-2 col-form-label">Address</label>
        <div class="col-sm-10">
          <textarea
            id="inputAddress"
            v-model="contact.address"
            class="form-control"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputContactUrl" class="col-sm-2 col-form-label">Url</label>
        <div class="col-sm-10">
          <input
            id="inputContactUrl"
            v-model="contact.url"
            type="text"
            class="form-control"
          >
        </div>
      </div>
      <div class="form-group row">
        <label for="inputLabel" class="col-sm-2 col-form-label">Relation</label>
        <div class="col-sm-10">
          <multiselect
            v-model="contactLabels"
            :options="labels"
            :multiple="true"
            track-by="id"
            label="name"
          />
        </div>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-dismiss="modal"
          @click="closeModal"
        >
          Cancel
        </button>
        <button type="sumbit" class="btn btn-primary">Save</button>
      </div>
    </form>
  </sweet-modal>
</template>

<script>
import { SweetModal } from 'sweet-modal-vue'
import Multiselect from 'vue-multiselect'
export default {
  components: {
    SweetModal,
    Multiselect
  },
  data () {
    return {
      labels: [],
      contactLabels: [],
      contact: {
        img: '',
        name: '',
        phone: '',
        email: '',
        address: '',
        dob: '',
        url: ''
      }
    }
  },

  methods: {
    openModal () {
      this.$refs.modal.open()
    },
    closeModal () {
      this.$refs.modal.close()
    },
    contactStore () {
      let self = this
      axios.post('/api/admin/apps/contacts/list', {
        contact: self.contact,
        labels: self.contactLabels
      })
        .then(function (response) {
          self.$refs.modal.close()
          self.$parent.contacts.push(response.data)
          self.contact = {}
          self.labels = {}
        })
    }
  }
}
</script>
