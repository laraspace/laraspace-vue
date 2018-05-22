<template>
  <sweet-modal ref="modal">
    <form @submit.prevent="labelStore">
      <div class="form-group row">
        <label for="inputlabel" class="col-sm-2 col-form-label">Add New Label</label>
        <div class="col-sm-10">
          <input
            id="inputlabel"
            v-model="label"
            type="text"
            class="form-control"
          >
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

export default {
  components: {
    SweetModal
  },
  data () {
    return {
      label: ''
    }
  },
  methods: {
    openModal () {
      this.$refs.modal.open()
    },
    closeModal () {
      this.$refs.modal.close()
    },
    async labelStore () {
      let response = await axios.post('/api/admin/apps/contacts/labels', {'label': self.label})
      this.$refs.modal.close()
      this.$parent.labels.push(response.data)
      this.lable = {}
    }
  }
}
</script>
