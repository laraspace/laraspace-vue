<template>
    <div class="main-content">
        <div class="page-header">
            <h3 class="page-title">Vee Validation</h3>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Forms</a></li>
                <li class="breadcrumb-item active">Vee Validation</li>
            </ol>
        </div>
        <div class="card">
            <div class="card-header">
                <h6>Basic Validation <a class="source-link" href="http://vee-validate.logaretm.com/#basic-example"
                                       target="_blank">source</a>
                </h6>
            </div>
            <div class="card-block">
                <div :class="{'form-group' : true , 'has-danger': errors.has('name') }">
                    <label>Name </label>
                    <input v-model="name" v-validate data-vv-rules="required" class="form-control"
                           :class="{'form-control-danger': errors.has('name') }" name="name" type="text">
                    <div class="form-control-feedback" v-show="errors.has('name')">{{ errors.first('name') }}</div>
                </div>

                <div :class="{'form-group' : true , 'has-danger': errors.has('email') }">
                    <label>Email Address</label>
                    <input v-model="email" v-validate data-vv-rules="required|email"
                           class="form-control" :class="{'form-control-danger': errors.has('email') }" name="email"
                           type="text">
                    <div class="form-control-feedback" v-show="errors.has('email')">{{ errors.first('email') }}
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h6>Form Validation <a class="source-link" href="http://vee-validate.logaretm.com/examples#validate-form"
                                       target="_blank">source</a>
                </h6>
            </div>
            <div class="card-block">

                <form @submit="validateBeforeSubmit">

                    <div :class="{'form-group' : true , 'has-danger': errors.has('name') }">
                        <label>Name </label>
                        <input v-model="name" v-validate.initial="name" data-vv-rules="required" class="form-control"
                               :class="{'form-control-danger': errors.has('name') }" name="name" type="text">
                        <div class="form-control-feedback" v-show="errors.has('name')">{{ errors.first('name') }}</div>
                    </div>

                    <div :class="{'form-group' : true , 'has-danger': errors.has('email') }">
                        <label>Email Address</label>
                        <input v-model="email" v-validate.initial="email" data-vv-rules="required|email"
                               class="form-control" :class="{'form-control-danger': errors.has('email') }" name="email"
                               type="text">
                        <div class="form-control-feedback" v-show="errors.has('email')">{{ errors.first('email') }}
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" name="password" id="password"
                        >
                    </div>
                    <div class="form-group">
                        <label>Retype Password</label>
                        <input type="password" name="password_confirmation" class="form-control"
                        >
                    </div>
                    <div :class="{'form-group' : true , 'has-danger': errors.has('terms') }">
                        <div class="checkbox checkbox-full">
                            <label>
                                <input type="checkbox" name="terms" v-validate.initial="terms" data-vv-rules="required">
                                I Accept Terms & Conditions
                            </label>
                        </div>
                    </div>
                    <button class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        data(){
            return {
                email: '',
                name: '',
                terms: false
            }
        },
        methods: {
            validateBeforeSubmit(e){
                this.$validator.validateAll();

                if (this.errors.any()) {
                    e.preventDefault();
                }
            }
        }
    }
</script>