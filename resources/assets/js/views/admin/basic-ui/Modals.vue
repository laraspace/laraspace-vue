<template>

    <div class="main-content buttons-demo">
        <div class="page-header">
            <h3 class="page-title">Modals</h3>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">UI Elements</a></li>
                <li class="breadcrumb-item active">Modals</li>
            </ol>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h6>General Buttons</h6>
                    </div>
                    <div class="col-sm-6">
                        <h5 class="section-semi-title">Live Demo</h5>
                            <button type="button" v-on:click="$refs.modal.open()" class="btn btn-theme">Regular Alert
                            </button></br>
                            <sweet-modal ref="modal">This is an alert.</sweet-modal>

                        <button type="button" v-on:click="$refs.success_modal.open()" class="btn btn-primary">Success Alert
                        </button></br>
                        <sweet-modal ref="success_modal" icon="success">
                            This is a success!
                        </sweet-modal>

                        <button type="button" v-on:click="$refs.warning_modal.open()" class="btn btn-primary">Warning Alert
                        </button></br>
                        <sweet-modal ref="warning_modal" icon="warning">
                            This is a success!
                        </sweet-modal>

                        <button type="button" v-on:click="$refs.error_modal.open()" class="btn btn-primary">Alert with Error and Button
                        </button></br>
                        <sweet-modal ref="error_modal" icon="error" title="Oh noes…">
                            This is an error…
                            <button type="button" class="btn btn-primary" slot="button">That's fine!</button>
                        </sweet-modal>

                        <button type="button" v-on:click="$refs.blocking_modal.open()" class="btn btn-primary">Dark with Blocking Error
                        </button></br>
                        <sweet-modal ref="blocking_modal" icon="error" hide-close-button blocking overlay-theme="dark" modal-theme="dark">
                            This is an error…

                            <button type="button" slot="button" class="btn btn-danger"  v-on:click="$refs.blocking_modal.close('darkWithBlockingError')">Press this Button</button>
                        </sweet-modal>

                        <button type="button" v-on:click="$refs.dark_html_modal.open()" class="btn btn-primary">Dark with HTML Content
                        </button></br>
                        <sweet-modal modal-theme="dark" ref="dark_html_modal" overlay-theme="dark">
                            This is <b>HTML</b>-<i>Content</i>.
                            <br /><br />
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/4xgx4k83zzc" frameborder="0" allowfullscreen></iframe>
                        </sweet-modal>

                        <button type="button" v-on:click="$refs.additional_modal.open()" class="btn btn-primary">Additional Window Controls
                        </button></br>
                        <sweet-modal title="Alert" ref="additional_modal">
                            This is an alert.

                            <template slot="box-action">
                                <a href="#">Action 1</a> &nbsp;
                                <a href="#">Action 2</a>
                            </template>
                        </sweet-modal>

                        <button type="button" v-on:click="$refs.wide_modal.open()" class="btn btn-primary">Ultra Wide
                        </button>
                        <sweet-modal  ref="wide_modal" title="Ultra Wide" width="100%">
                            This is a very wide modal.
                        </sweet-modal>

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script type="text/babel">
    import {SweetModal, SweetModalTab} from 'sweet-modal-vue'

    export default {
        components: {
            SweetModal,
            SweetModalTab
        },
        install(Vue, options) {
            Vue.component('SweetModal', sweet-modal)
            Vue.component('SweetModalTab', sweet-modalTab)
        },

    }
</script>