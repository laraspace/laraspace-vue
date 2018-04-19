<template>
      <div class="row">
          <div class="col-xl-4 mb-4">
            <h5 class="section-semi-title">SINGLE SELECT</h5>
            <multiselect
              v-model="value"
              :options="SingleOptions"
              :searchable="true"
              :close-on-select="true"
              :show-labels="true"
              placeholder="Pick a value"
            />
          </div>
          <div class="col-xl-4 mb-4">
            <h5 class="section-semi-title">WITH GROUPS</h5>
            <multiselect
              v-model="GroupValue"
              :options="GroupOptions"
              :multiple="true"
              group-values="libs"
              group-label="language"
              placeholder="Type to search"
              track-by="name"
              label="name">
              <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
            </multiselect>
          </div>
          <div class="col-xl-4 mb-4">
            <h5 class="section-semi-title">MULTI SELECT</h5>
            <multiselect
              v-model="selected"
              :options="MultiOptions"
              :multiple="true"/>
          </div>
        </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
export default {
  components: { Multiselect },
  data () {
    return {
      selected: null,
      value: '',
      GroupValue: '',
      SingleOptions: ['Select option', 'options', 'selected', 'mulitple', 'label', 'searchable', 'clearOnSelect', 'hideSelected', 'maxHeight', 'allowEmpty', 'showLabels', 'onChange', 'touched'],
      MultiOptions: ['list', 'of', 'options'],
      GroupOptions: [
        {
          language: 'Javascript',
          libs: [
            { name: 'Vue.js', category: 'Front-end' },
            { name: 'Adonis', category: 'Backend' }
          ]
        },
        {
          language: 'Ruby',
          libs: [
            { name: 'Rails', category: 'Backend' },
            { name: 'Sinatra', category: 'Backend' }
          ]
        },
        {
          language: 'Other',
          libs: [
            { name: 'Laravel', category: 'Backend' },
            { name: 'Phoenix', category: 'Backend' }
          ]
        }
      ],
      value: []
    }
  },
}

</script>
