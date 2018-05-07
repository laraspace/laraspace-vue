<template>
  <sweet-modal ref="modal">
    <!-- <form>
      <div class="form-group row">
        <label for="inputEmailTo" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input
            id="inputEmailTo"
            type="email"
            class="form-control"
          >
        </div>
      </div>
      <div class="form-group row">
        <label for="inputSubject" class="col-sm-2 col-form-label">Phone</label>
        <div class="col-sm-10">
          <input
            id="inputSubject"
            type="text"
            class="form-control"
          >
        </div>
      </div>
      <div class="form-group row">
        <label
          for="inputSubject"
          class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <textarea
            class="form-control"
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
    </form> -->

     <form @submit.prevent="contactStore">
                           
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
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-primary">Add Contact</button>
          </form>
  </sweet-modal>
</template>

  <script>
 import { SweetModal } from 'sweet-modal-vue'

export default {
  components: {
    SweetModal
  },
  methods: {
    openModal () {
      this.$refs.modal.open()
    },
    closeModal () {
      this.$refs.modal.close()
    }
  }
}
</script>
  
  