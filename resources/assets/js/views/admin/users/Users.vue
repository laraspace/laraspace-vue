<template>
    <div class="main-content">
        <div class="page-header">
            <h3 class="page-title">Users</h3>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Users</a></li>
                <li class="breadcrumb-item active">Users</li>
            </ol>
            <div class="page-actions">
                <a href="#" class="btn btn-primary"><i class="icon-fa icon-fa-plus"></i> New User</a>
                <button class="btn btn-danger"><i class="icon-fa icon-fa-trash"></i> Delete </button>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h6>All Users</h6>

                        <div class="card-actions">

                        </div>
                    </div>
                    <div class="card-body">
                        <table id="responsive-datatable" class="table table-striped table-bordered" cellspacing="0"
                               width="100%">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Registered On</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr v-for="user in users">
                                    <td>{{user.name}}</td>
                                    <td>{{user.email}}</td>
                                    <td>{{user.role}}</td>
                                    <td>{{user.created_at}}</td>
                                    <td>
                                        <router-link to="/admin/users/profile">
                                            <a  class="btn btn-default btn-sm">
                                                <i class="icon-fa icon-fa-search"></i> View
                                            </a>
                                        </router-link>
                                        <a @click="deleteUser(user.id)" class="btn btn-default btn-sm"
                                           data-delete data-confirmation="notie">
                                            <i class="icon-fa icon-fa-trash"></i>Delete
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/babel">
    export default {
        data(){
          return {
              users:[],
          }
        },
        mounted() {
            this.$nextTick(() => {
                this.getUsers();
                Plugin.initPlugins(['DataTables']);
            });

        },
        methods: {
            getUsers(){
                let vm = this;
                axios.get('/api/admin/users/get')
                    .then(function (response) {
                        vm.users = response.data;
                    })
                    .catch(function (error) {
                        toastr['error']('There was an error', "Error");
                    });
            },

            deleteUser(id) {
                let vm = this;
                notie.confirm({
                    text: 'Are you sure?',
                    cancelCallback: function () {
                        toastr['info']('Cancel');
                    },
                    submitCallback: function () {
                        axios.delete('/api/admin/users/'+id)
                            .then(function (response) {
                                vm.users = response.data;
                                toastr['success']('User Deleted', "Success");
                            })
                            .catch(function (error) {
                                toastr['error']('There was an error', "Error");
                            });
                    }
                });
            },
        }
    }
</script>