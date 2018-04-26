<template>
  <sweet-modal ref="modal">
    <form>
      <div class="form-group row">
        <label for="inputEmailTo" class="col-sm-2 col-form-label">Email To</label>
        <div class="col-sm-10">
          <input
            id="inputEmailTo"
            type="email"
            class="form-control"
          >
        </div>
      </div>
      <div class="form-group row">
        <label for="inputSubject" class="col-sm-2 col-form-label">Subject</label>
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
          class="col-sm-2 col-form-label">Message</label>
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
        <button type="sumbit" class="btn btn-primary">Send</button>
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
