<template>
    <div class="main-content sweet-modal-demo">
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
                        <h6>Simple Modals</h6>
                    </div>
                    <div class="card-body">
                        <div class="demo-buttons">
                            <div class="modal-demo">
                                <button type="button" v-on:click="$refs.modal.open()" class="btn btn-primary">
                                    Regular Alert
                                </button>
                                <sweet-modal ref="modal">This is an alert.</sweet-modal>
                            </div>
                            <div class="modal-demo">
                                <button type="button" v-on:click="$refs.success_modal.open()" class="btn btn-primary">
                                    Success Alert
                                </button>
                                <sweet-modal ref="success_modal" icon="success">
                                    This is a success!
                                </sweet-modal>
                            </div>
                            <div class="modal-demo">
                                <button type="button" v-on:click="$refs.warning_modal.open()" class="btn btn-primary">
                                    Warning Alert
                                </button>
                                <sweet-modal ref="warning_modal" icon="warning">
                                    This is a success!
                                </sweet-modal>
                            </div>
                            <div class="modal-demo">
                                <button type="button" v-on:click="$refs.error_modal.open()" class="btn btn-primary">
                                    Alert with Error and Button
                                </button>
                                <sweet-modal ref="error_modal" icon="error" title="Oh noes…">
                                    This is an error…
                                    <button type="button" class="btn btn-primary" slot="button">That's fine!</button>
                                </sweet-modal>
                            </div>
                            <div class="modal-demo">
                                <button type="button" v-on:click="$refs.blocking_modal.open()" class="btn btn-primary">
                                    Dark with Blocking Error
                                </button>
                                <sweet-modal ref="blocking_modal" icon="error" hide-close-button blocking
                                             overlay-theme="dark"
                                             modal-theme="dark">
                                    This is an error…
                                    <button type="button" slot="button" class="btn btn-danger"
                                            v-on:click="$refs.blocking_modal.close('darkWithBlockingError')">
                                        Press this Button
                                    </button>
                                </sweet-modal>
                            </div>
                            <div class="modal-demo">
                                <button type="button" v-on:click="$refs.dark_html_modal.open()" class="btn btn-primary">
                                    Dark with HTML Content
                                </button>
                                <sweet-modal modal-theme="dark" ref="dark_html_modal" overlay-theme="dark">
                                    This is <b>HTML</b>-<i>Content</i>.
                                    <br/><br/>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4xgx4k83zzc"
                                            frameborder="0" allowfullscreen></iframe>
                                </sweet-modal>
                            </div>
                            <div class="modal-demo">
                                <button type="button" v-on:click="$refs.additional_modal.open()"
                                        class="btn btn-primary">
                                    Additional Window Controls
                                </button>
                                <sweet-modal title="Alert" ref="additional_modal">
                                    This is an alert.

                                    <template slot="box-action">
                                        <a href="#">Action 1</a> &nbsp;
                                        <a href="#">Action 2</a>
                                    </template>
                                </sweet-modal>
                            </div>
                            <div class="modal-demo">
                                <button type="button" v-on:click="$refs.wide_modal.open()" class="btn btn-primary">
                                    Ultra Wide
                                </button>
                                <sweet-modal ref="wide_modal" title="Ultra Wide" width="100%">
                                    This is a very wide modal.
                                </sweet-modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h6>Tabbed Buttons</h6>
                    </div>
                    <div class="card-body">
                        <div class="demo-buttons">
                            <div class="modal-demo">
                                <button type="button" v-on:click="$refs.tabbed_modal.open()" class="btn btn-primary">
                                    Tabbed Modal
                                </button>
                                <sweet-modal ref="tabbed_modal">
                                    <sweet-modal-tab title="Tab 1" id="tab1">Contents of Tab 1</sweet-modal-tab>
                                    <sweet-modal-tab title="Tab 2" id="tab2">Contents of Tab 2</sweet-modal-tab>
                                    <sweet-modal-tab title="Tab 3" id="tab3" disabled>Tab 3 is disabled
                                    </sweet-modal-tab>
                                </sweet-modal>
                            </div>
                            <div class="modal-demo">
                                <button type="button" v-on:click="$refs.tabbed_modal_icon.open()"
                                        class="btn btn-primary">
                                    Tabbed Modal with Icons
                                </button>
                                <sweet-modal ref="tabbed_modal_icon">
                                    <sweet-modal-tab title="Tab 1" id="tab1" :icon="icons_anchor">Contents of Tab 1
                                    </sweet-modal-tab>
                                    <sweet-modal-tab title="Tab 2" id="tab2" :icon="icons_sun">Contents of Tab 2
                                    </sweet-modal-tab>
                                    <sweet-modal-tab title="Tab 3" id="tab3" :icon="icons_leaf" disabled>
                                        Tab 3 is disabled
                                    </sweet-modal-tab>
                                    <!-- icons is an object containing SVG strings -->
                                </sweet-modal>
                            </div>
                            <div class="modal-demo">
                                <button type="button" v-on:click="$refs.tabbed_modal_title.open()"
                                        class="btn btn-primary">
                                    Tabbed Modal with Title
                                </button>
                                <sweet-modal title="This is a Tabbed Modal" ref="tabbed_modal_title">
                                    <sweet-modal-tab title="Tab 1" id="tab1" :icon="icons_anchor">Contents of Tab 1
                                    </sweet-modal-tab>
                                    <sweet-modal-tab title="Tab 2" id="tab2" :icon="icons_sun">Contents of Tab 2
                                    </sweet-modal-tab>
                                    <sweet-modal-tab title="Tab 3" id="tab3" :icon="icons_leaf" disabled>
                                        Tab 3 is disabled
                                    </sweet-modal-tab>
                                    <!-- icons is an object containing SVG strings -->
                                </sweet-modal>
                            </div>
                            <div class="modal-demo">
                                <button type="button" v-on:click="$refs.tabbed_modal_icon_button.open()"
                                        class="btn btn-primary">
                                    Tabbed Modal with Icons and Buttons
                                </button>
                                <sweet-modal ref="tabbed_modal_icon_button">
                                    <sweet-modal-tab title="Tab 1" id="tab1" :icon="icons_anchor">Contents of Tab 1
                                    </sweet-modal-tab>
                                    <sweet-modal-tab title="Tab 2" id="tab2" :icon="icons_sun">Contents of Tab 2
                                    </sweet-modal-tab>
                                    <sweet-modal-tab title="Tab 3" id="tab3" :icon="icons_leaf" disabled>
                                        Tab 3 is disabled
                                    </sweet-modal-tab>
                                    <!-- icons is an object containing SVG strings -->
                                    <button type="button" slot="button" class="btn btn-primary">Action1</button>
                                    <button type="button" slot="button" class="btn btn-primary">Action2</button>
                                </sweet-modal>
                            </div>
                            <div class="modal-demo">
                                <button type="button" v-on:click="$refs.nested.open()" class="btn btn-primary">
                                    Nested
                                </button>
                                <sweet-modal ref="nested">
                                    This is the parent modal.

                                    <button type="button" slot="button" @click="$refs.nestedChild.open()"
                                            class="btn btn-primary">
                                        Open Child Modal
                                    </button>
                                </sweet-modal>

                                <sweet-modal ref="nestedChild">
                                    This is the child modal.
                                </sweet-modal>
                            </div>
                            <div class="modal-demo">
                                <button type="button" v-on:click="$refs.long_modal.open()" class="btn btn-primary">
                                    Very Long Modal
                                </button>
                                <sweet-modal ref="long_modal">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </sweet-modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script type="text/babel">
    import {SweetModal, SweetModalTab} from 'sweet-modal-vue';

    export default {
        data() {
            return {
                icons_leaf: "<i class='icon-fa icon-fa-leaf'></i>",
                icons_sun: "<i class='icon-fa icon-fa-sun-o'></i>",
                icons_anchor: "<i class='icon-fa icon-fa-anchor'></i>"
            }
        },
        components: {
            SweetModal,
            SweetModalTab
        },
        install(Vue, options) {
            Vue.component('SweetModal', SweetModal)
            Vue.component('SweetModalTab', SweetModalTab)
        },

    }
</script>