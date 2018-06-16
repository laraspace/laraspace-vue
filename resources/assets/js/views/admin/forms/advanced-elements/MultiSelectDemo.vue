<template>
  <div class="row">
    <div class="col-xl-4 mb-4">
      <h5 class="section-semi-title">SINGLE SELECT</h5>
      <multiselect
        v-model="value"
        :options="SingleOptions"
        :searchable="true"
        :show-labels="false"
        placeholder="Pick a value"
      />
    </div>
    <div class="col-xl-4 mb-4">
      <h5 class="section-semi-title">WITH GROUPS</h5>
      <multiselect
        v-model="GroupValue"
        :options="GroupOptions"
        :multiple="true"
        group-values="city"
        group-label="timezone"
        placeholder="Type to search"
        track-by="name"
        label="name"
      >
        <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
      </multiselect>
    </div>
    <div class="col-xl-4 mb-4">
      <h5 class="section-semi-title">MULTI SELECT</h5>
      <multiselect
        v-model="selected"
        :options="MultiOptions"
        :multiple="true"
      />
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: { Multiselect },
  data () {
    return {
      selected: null,
      value: '',
      GroupValue: '',
      SingleOptions: ['Alaska', 'Hawaii', 'California', 'Nevada', 'Oregon', 'Washington'],
      MultiOptions: ['Alaska', 'Hawaii', 'California', 'Nevada', 'Oregon', 'Washington'],
      GroupOptions: [
        {
          timezone: 'Alaskan/Hawaiian Time Zone',
          city: [
            {name: 'Alaska'},
            {name: 'Hawaii'}
          ]
        },
        {
          timezone: 'Pacific Time Zone',
          city: [
            {name: 'California'},
            {name: 'Nevada'},
            {name: 'Oregon'},
            {name: 'Washington'}
          ]
        },
        {
          timezone: 'Mountain Time Zone',
          city: [
            {name: 'Arizona'},
            {name: 'Colorado'},
            {name: 'Idaho'},
            {name: 'Montana'},
            {name: 'Nebraska'},
            {name: 'New Mexico'},
            {name: 'North Dakota'},
            {name: 'Utah'},
            {name: 'Wyoming'}
          ]
        },
        {
          timezone: 'Central Time Zone',
          city: [
            {name: 'Alabama'},
            {name: 'Arkansas'},
            {name: 'Illinois'},
            {name: 'Iowa'},
            {name: 'Kansas'},
            {name: 'Kentucky'},
            {name: 'Louisiana'},
            {name: 'Minnesota'},
            {name: 'Mississippi'},
            {name: 'Missouri'},
            {name: 'Oklahoma'},
            {name: 'South Dakota'},
            {name: 'Texas'},
            {name: 'Tennessee'},
            {name: 'Wisconsin'}
          ]
        },
        {
          timezone: 'Eastern Time Zone',
          city: [
            {name: 'Connecticut'},
            {name: 'Delaware'},
            {name: 'Florida'},
            {name: 'Georgia'},
            {name: 'Indiana'},
            {name: 'Maine'},
            {name: 'Maryland'},
            {name: 'Massachusetts'},
            {name: 'Michigan'},
            {name: 'New Hampshire'},
            {name: 'New Jersey'},
            {name: 'New York'},
            {name: 'North Carolina'},
            {name: 'Ohio'},
            {name: 'Pennsylvania'},
            {name: 'Rhode Island'},
            {name: 'South Carolina'},
            {name: 'Vermont'},
            {name: 'Virginia'},
            {name: 'West Virginia'}
          ]
        }
      ]
    }
  }
}
</script>
