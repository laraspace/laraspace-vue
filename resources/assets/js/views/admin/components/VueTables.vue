<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Vue Datatables</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Components</a></li>
        <li class="breadcrumb-item active">Vue Datatables</li>
      </ol>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Default</h6>
      </div>
      <div class="card-body">
        <table-component
          :data="[
            { firstName: 'John', lastName: 'Lennon', instrument: 'Guitar', birthday: '04/10/1940', songs: 72 },
            { firstName: 'Paul', lastName: 'McCartney', instrument: 'Bass', birthday: '18/06/1942', songs: 70 },
            { firstName: 'George', lastName: 'Harrison', instrument: 'Guitar', birthday: '25/02/1943', songs: 22 },
            { firstName: 'Ringo', lastName: 'Starr', instrument: 'Drums', birthday: '07/07/1940', songs: 2 },
          ]"
          table-class="table"
          sort-by="songs"
          sort-order="asc"
        >
          <table-column show="firstName" label="First name"/>
          <table-column show="lastName" label="Last name"/>
          <table-column show="instrument" label="Instrument"/>
          <table-column
            show="songs"
            label="Songs"
            data-type="numeric"
          />
          <table-column
            show="birthday"
            label="Birthday"
            data-type="date:DD/MM/YYYY"
          />
          <table-column
            :sortable="false"
            :filterable="false"
            label=""
          >
            <template slot-scope="row">
              <div class="table__actions">
                <a class="btn btn-default btn-sm" href="/admin/conversations/243/edit">
                  Edit
                </a>
                <a class="btn btn-default btn-sm" href="/admin/conversations/243/edit">
                  Delete
                </a>
              </div>
            </template>
          </table-column>
        </table-component>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h6>Asynchronous Pagination</h6>
      </div>
      <div class="card-body">
        <table-component :data="fetchData" table-class="table">
          <table-column show="name" label="Name"/>
          <table-column show="email" label="Email"/>
          <table-column show="role" label="Role"/>
          <table-column show="created_at" label="Registered On"/>
          <table-column
            :sortable="false"
            :filterable="false"
            label=""
          >
            <template slot-scope="row">
              <div class="table__actions">
                <a :href="`#${row.name}`">View</a>
                <a :href="`#${row.name}`">Edit</a>
                <a :href="`#${row.name}`">Delete</a>
              </div>
            </template>
          </table-column>
        </table-component>
      </div>
    </div>
  </div>
</template>

<script>
import { TableComponent, TableColumn } from 'vue-table-component'

export default {
  components: {
    TableComponent,
    TableColumn
  },
  methods: {
    async fetchData ({ page, filter, sort }) {
      const response = await axios.get(`/api/admin/users/get?page=${page}`)

      return {
        data: response.data.data,
        pagination: {
          totalPages: response.data.last_page,
          currentPage: page,
          count: response.data.count
        }
      }
    }
  }
}
</script>
