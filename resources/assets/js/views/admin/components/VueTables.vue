<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">VueTables</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Components</a></li>
        <li class="breadcrumb-item active">VueTables</li>
      </ol>
    </div>
    <table-component
      :data="[
        { firstName: 'John', lastName: 'Lennon', instrument: 'Guitar', birthday: '04/10/1940', songs: 72 },
        { firstName: 'Paul', lastName: 'McCartney', instrument: 'Bass', birthday: '18/06/1942', songs: 70 },
        { firstName: 'George', lastName: 'Harrison', instrument: 'Guitar', birthday: '25/02/1943', songs: 22 },
        { firstName: 'Ringo', lastName: 'Starr', instrument: 'Drums', birthday: '07/07/1940', songs: 2 },
      ]"
      sort-by="songs"
      sort-order="asc"
    >
      <table-column
        show="firstName"
        label="First name"/>
      <table-column
        show="lastName"
        label="Last name"/>
      <table-column
        show="instrument"
        label="Instrument"/>
      <table-column
        show="songs"
        label="Songs"
        data-type="numeric"/>
      <table-column
        show="birthday"
        label="Birthday"
        data-type="date:DD/MM/YYYY"/>
      <table-column
        :sortable="false"
        :filterable="false"
        label="">
        <template slot-scope="row">
          <a :href="`#${row.firstName}`">Edit</a>
        </template>
      </table-column>
    </table-component>
  </div>
</template>
<script>
import { TableComponent, TableColumn } from 'vue-table-component'
import 'vue-table-component/docs/table-component.css'
export default {
  components: {
    TableComponent,
    TableColumn
  }
}
</script>
