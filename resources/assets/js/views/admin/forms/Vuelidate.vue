<template>
    <div class="main-content">
        <div class="page-header">
            <h3 class="page-title">Vuelidate Examples</h3>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Forms</a></li>
                <li class="breadcrumb-item active">Vuelidate</li>
            </ol>
        </div>
        <div class="card">
            <div class="card-header">
                <h6>Basic Form <a class="source-link" href="https://monterail.github.io/vuelidate/#sub-basic-usage"
                                  target="_blank">source</a>
                </h6>
            </div>
            <div class="card-body">
                <div>
                    <div class="form-group">
                        <label>Name</label>
                        <input class="form-control" v-bind:class="{ 'is-invalid': $v.name.$error }" v-model.trim="name"
                               @input="$v.name.$touch()">
                    </div>
                    <span class="text-danger" v-if="!$v.name.required">Field is required</span><span
                        class="text-danger"
                        v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</span>
                    <pre>name: {{ $v.name }}</pre>
                    <div class="form-group">
                        <label>Age</label>
                        <input class="form-control" v-bind:class="{ 'is-invalid': $v.age.$error }" v-model.trim="age"
                               @blur="$v.age.$touch()">
                    </div>
                    <span class="text-danger" v-if="!$v.age.between">Must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}}</span>
                    <pre>age: {{ $v.age }}</pre>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h6>Contextified validators <a class="source-link" href="https://monterail.github.io/vuelidate/#sub-contextified-validators"
                                        target="_blank">source</a>
                </h6>
            </div>
            <div class="card-body">
                <div>
                    <div class="form-group" >
                        <label>Password</label>
                        <input class="form-control" v-bind:class="{ 'is-invalid': $v.password.$error }" v-model.trim="password" @input="$v.password.$touch()">
                    </div><span class="text-danger" v-if="!$v.password.required">Password is required.</span><span class="text-danger" v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</span>
                    <div class="form-group" >
                        <label>Repeat password</label>
                        <input class="form-control" v-bind:class="{ 'is-invalid': $v.password.$error }" v-model.trim="repeatPassword" @input="$v.repeatPassword.$touch()">
                    </div><span class="text-danger" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</span>
                    <pre>password: {{ $v.password }}repeatPassword: {{ $v.repeatPassword }}</pre>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h6>Data Nesting <a class="source-link" href="https://monterail.github.io/vuelidate/#sub-data-nesting"
                                        target="_blank">source</a>
                </h6>
            </div>
            <div class="card-body">
                <div>
                    <div class="form-group" v-bind:class="{ 'is-invalid': $v.form.nestedA.$error }">
                        <label>Nested A</label>
                        <input class="form-control" v-model.trim="form.nestedA" @input="$v.form.nestedA.$touch()">
                    </div><span class="text-danger" v-if="!$v.form.nestedA.required">Field is required.</span>
                    <div class="form-group" v-bind:class="{ 'is-invalid': $v.form.nestedB.$error }">
                        <label>Nested B</label>
                        <input class="form-control" v-model.trim="form.nestedB" @input="$v.form.nestedB.$touch()">
                    </div><span class="text-danger" v-if="!$v.form.nestedB.required">Field is required.</span>
                    <div class="form-group" v-bind:class="{ 'is-invalid': $v.form.$error }"></div><span class="text-danger" v-if="$v.form.$error">Form is invalid.</span>
                    <pre>form: {{ $v.form }}</pre>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h6>Asynchronous validation <a class="source-link" href="https://monterail.github.io/vuelidate/#sub-asynchronous-validation"
                                        target="_blank">source</a>
                </h6>
            </div>
            <div class="card-body">
                <div>
                    <div class="form-group">
                        <label >Username</label>
                        <input class="form-control"  v-bind:class="{ 'is-invalid': $v.username.$error, 'form-group--loading': $v.username.$pending }" v-model.trim="username" @input="$v.username.$touch()">
                    </div><span class="text-danger" v-if="!$v.username.required">Username is required.</span><span class="text-danger" v-if="!$v.username.isUnique">This username is already registered.</span>
                    <pre>username: {{ $v.username }}</pre>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import { validationMixin } from 'vuelidate'

    import {required,sameAs, minLength, between} from 'vuelidate/lib/validators'
//    import { required,  minLength } from 'vuelidate/lib/validators'

    export default {
        mixins: [validationMixin],
        data() {
            return {
                name: '',
                username: '',
                age: 0,
                password: '',
                repeatPassword: '',
                form: {
                    nestedA: '',
                    nestedB: ''
                }
            }
        },
        validations: {
            name: {
                required,
                minLength: minLength(4)
            },
            age: {
                between: between(20, 30)
            },
            password: {
                required,
                minLength: minLength(6)
            },
            repeatPassword: {
                sameAsPassword: sameAs('password')
            },
            form: {
                nestedA: {
                    required
                },
                nestedB: {
                    required
                }
            },
            username: {
                required,
                isUnique (value) {
                    // standalone validator ideally should not assume a field is required
                    if (value === '') return true;

                    // simulate async call, fail for all logins with even length

                    axios.post('/api/admin/vuelidate/email-exist',{email:value}).then(function (response) {
                        console.log(response.data);
                    });
                    return false;

//                    return new Promise((resolve, reject) => {
//                        setTimeout(() => {
//                            resolve(typeof value === 'string' && value.length % 2 !== 0)
//                        }, 350 + Math.random() * 300)
//                    });
                }
            }
        }
    }
</script>