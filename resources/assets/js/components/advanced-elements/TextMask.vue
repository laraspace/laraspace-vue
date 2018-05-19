<template>
  <div class="row">
    <div class="col-xl-4 mb-4">
      <h5 class="section-semi-title">Phone number</h5>
      <masked-input
        v-model="phone"
        :mask="['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]"
        :guide="true"
        :keep-char-positions="true"
        :show-mask="true"
        type="text"
        name="phone"
        class="form-control"
      />
    </div>
    <div class="col-xl-4 mb-4">
      <h5 class="section-semi-title">Date</h5>
      <masked-input
        v-model="date"
        :mask="[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]"
        :guide="true"
        :keep-char-positions="true"
        :show-mask="true"
        type="text"
        name="date"
        class="form-control"
      />
    </div>
    <div class="col-xl-4 mb-4">
      <h5 class="section-semi-title">Auto Correct Date</h5>
      <masked-input
        v-model="dateAuto"
        :mask="[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]"
        :guide="true"
        :pipe="auto"
        :keep-char-positions="true"
        :show-mask="true"
        type="text"
        name="dateAuto"
        class="form-control"
      />
    </div>
  </div>
</template>

<script>
import MaskedInput from 'vue-text-mask'
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'
const autoCorrectedDatePipe = createAutoCorrectedDatePipe('mm/dd/yyyy HH:MM')
export default {
  name: 'MaskInputs',
  components: {
    'masked-input': MaskedInput
  },
  data () {
    return {
      phone: '',
      date: '',
      dateAuto: '',
      auto: autoCorrectedDatePipe
    }
  }
}
</script>
