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
                                <button type="button" v-on:click="open" class="btn btn-theme" >Basic Modal
                                <!-- Simple Modal -->

                                    <SweetModal >
                                        This is the parent modal.
                                        <SweetModal slot="button" v-on:click="$refs.nestedChild.open()">Open Child Modal</SweetModal>
                                    </SweetModal>

                                    <sweet-modal ref="nestedChild">
                                        This is the child modal.
                                    </sweet-modal>
                                </button>

                            </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script type="text/babel">
    import { SweetModal, SweetModalTab } from 'sweet-modal-vue'

    export default {
        components: {
            SweetModal,
            SweetModalTab
        },
        install(Vue, options) {
            Vue.component('SweetModal', SweetModal)
            Vue.component('SweetModalTab', SweetModalTab)
        },
        methods:{
            open(){
                alert(hi);
            }
        },
    }
</script>