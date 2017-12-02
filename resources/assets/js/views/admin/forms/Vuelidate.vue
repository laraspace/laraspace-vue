<template>
    <div class="main-content">
        <div class="page-header">
            <h3 class="page-title">Vuelidate Validation</h3>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Forms</a></li>
                <li class="breadcrumb-item active">Vuelidate</li>
            </ol>
        </div>
        <div class="card">
            <div class="card-header">
                <h6>
                    Basic Form
                    <a class="source-link"
                       href="https://monterail.github.io/vuelidate/#sub-basic-usage"
                       target="_blank">
                        source
                    </a>
                </h6>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label>Name</label>
                    <input class="form-control" v-bind:class="{ 'is-invalid': $v.name.$error }" v-model.trim="name"
                           @input="$v.name.$touch()">
                    <div v-if="$v.name.$error">
                        <span class="help-block help-block-error" v-if="!$v.name.required">Field is required</span>
                        <span class="help-block help-block-error"
                              v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</span>
                    </div>
                </div>

                <pre class="pre-format">name: {{ $v.name }}</pre>

                <div class="form-group">
                    <label>Age</label>
                    <input class="form-control" v-bind:class="{ 'is-invalid': $v.age.$error }" v-model.trim="age"
                           @blur="$v.age.$touch()">
                    <div v-if="$v.age.$error">
                        <span class="help-block help-block-error"
                              v-if="!$v.age.between">Must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}}</span>
                    </div>
                </div>

                <pre class="pre-format">age: {{ $v.age }}</pre>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h6>Contextified validators <a class="source-link"
                                               href="https://monterail.github.io/vuelidate/#sub-contextified-validators"
                                               target="_blank">source</a>
                </h6>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label>Password</label>
                    <input class="form-control" v-bind:class="{ 'is-invalid': $v.password.$error }"
                           v-model.trim="password" @input="$v.password.$touch()">
                    <div v-if="$v.password.$error">
                        <span class="help-block help-block-error"
                              v-if="!$v.password.required">Password is required.</span>
                        <span class="help-block help-block-error" v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min
                            }} letters.</span>
                    </div>
                </div>
                <div class="form-group">
                    <label>Repeat password</label>
                    <input class="form-control" v-bind:class="{ 'is-invalid': $v.repeatPassword.$error }"
                           v-model.trim="repeatPassword" @input="$v.repeatPassword.$touch()">
                    <div v-if="$v.repeatPassword.$error">
                        <span class="help-block help-block-error" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</span>
                    </div>
                </div>
                <pre class="pre-format">password: {{ $v.password }}repeatPassword: {{ $v.repeatPassword }}</pre>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h6>Asynchronous validation <a class="source-link"
                                               href="https://monterail.github.io/vuelidate/#sub-asynchronous-validation"
                                               target="_blank">source</a>
                </h6>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label>Email</label>
                    <input class="form-control"
                           v-bind:class="{ 'is-invalid': $v.email.$error, 'form-group--loading': $v.email.$pending }"
                           v-model.trim.lazy="email" @change="$v.email.$touch()">
                    <div v-if="$v.email.$error">
                        <span class="help-block help-block-error" v-if="!$v.email.required">Email is required.</span>
                        <span class="help-block help-block-error" v-if="!$v.email.isUnique">This email is already registered.</span>
                    </div>
                </div>
                <p>
                    The above input validation checks the database in realtime to make sure that user enters a unique email on blur event. You can test with <code>admin@laraspace.in</code>
                </p>
                <pre class="pre-format">email: {{ $v.email }}</pre>
            </div>
        </div>

    </div>
</template>

<script type="text/babel">
    import {validationMixin} from 'vuelidate';

    import {required, sameAs, minLength, between} from 'vuelidate/lib/validators';

    const touchMap = new WeakMap();

    export default {
        mixins: [validationMixin],
        data() {
            return {
                name: '',
                email: '',
                age: 0,
                password: '',
                validate: '',
                repeatPassword: '',
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
            email: {
                required,
                isUnique(value) {
                    // standalone validator ideally should not assume a field is required
                    if (value === '') return true;

                    // simulate async call, fail for all logins with even length

                    return axios.post('/api/admin/vuelidate/email-exist', {email: value}).then((response) => {
                        return response.data
                    });
                }
            }
        }
    }
</script>