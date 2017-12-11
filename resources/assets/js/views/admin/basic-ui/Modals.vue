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
                        <h6>General Buttons</h6>

                    </div>
                    <div class="col-sm-6">
                        <h5 class="section-semi-title">Live Demo</h5>
                        <button type="button" v-on:click="$refs.simple.open()" class="btn btn-theme">Basic Modal
                            <!-- Simple Modal -->
                        </button>
                        <sweet-modal ref="simple">This is an alert.</sweet-modal>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h6>General Buttons</h6>
                    </div>
                    <div class="card-body">
                        <div class="demo-buttons">
                            <div class="modal-demo">
                                <button type="button" v-on:click="$refs.tabbed_modal.open()" class="btn btn-theme">
                                    Tabbed Modal
                                </button>
                                <sweet-modal ref="tabbed_modal">
                                    <sweet-modal-tab title="Tab 1" id="tab1">Contents of Tab 1</sweet-modal-tab>
                                    <sweet-modal-tab title="Tab 2" id="tab2">Contents of Tab 2</sweet-modal-tab>
                                    <sweet-modal-tab title="Tab 3" id="tab3" disabled>Tab 3 is disabled</sweet-modal-tab>
                                </sweet-modal>
                            </div>
                            <div class="modal-demo">
                                <button type="button" v-on:click="$refs.tabbed_modal_icon.open()" class="btn btn-theme">
                                    Tabbed Modal with Icons
                                </button>
                                <sweet-modal ref="tabbed_modal_icon">
                                    <sweet-modal-tab title="Tab 1" id="tab1" :icon="icons_anchor">Contents of Tab 1</sweet-modal-tab>
                                    <sweet-modal-tab title="Tab 2" id="tab2" :icon="icons_sun">Contents of Tab 2</sweet-modal-tab>
                                    <sweet-modal-tab title="Tab 3" id="tab3" :icon="icons_leaf" disabled>Tab 3 is disabled</sweet-modal-tab>
                                    <!-- icons is an object containing SVG strings -->
                                </sweet-modal>
                            </div>
                            <div class="modal-demo">
                                <button type="button" v-on:click="$refs.tabbed_modal_title.open()" class="btn btn-theme">
                                    Tabbed Modal with Title
                                </button>
                                <sweet-modal title="This is a Tabbed Modal" ref="tabbed_modal_title">
                                    <sweet-modal-tab title="Tab 1" id="tab1" :icon="icons_anchor">Contents of Tab 1</sweet-modal-tab>
                                    <sweet-modal-tab title="Tab 2" id="tab2" :icon="icons_sun">Contents of Tab 2</sweet-modal-tab>
                                    <sweet-modal-tab title="Tab 3" id="tab3" :icon="icons_leaf" disabled>Tab 3 is disabled</sweet-modal-tab>
                                    <!-- icons is an object containing SVG strings -->
                                </sweet-modal>
                            </div>
                            <div class="modal-demo">
                                <button type="button" v-on:click="$refs.tabbed_modal_icon_button.open()" class="btn btn-theme">
                                    Tabbed Modal with Icons and Buttons
                                </button>
                                <sweet-modal ref="tabbed_modal_icon_button">
                                    <sweet-modal-tab title="Tab 1" id="tab1" :icon="icons_anchor">Contents of Tab 1</sweet-modal-tab>
                                    <sweet-modal-tab title="Tab 2" id="tab2" :icon="icons_sun">Contents of Tab 2</sweet-modal-tab>
                                    <sweet-modal-tab title="Tab 3" id="tab3" :icon="icons_leaf" disabled>Tab 3 is disabled</sweet-modal-tab>
                                    <!-- icons is an object containing SVG strings -->
                                    <button type="button"  slot="button" class="btn btn-theme">Action1</button>
                                    <button type="button"  slot="button" class="btn btn-theme">Action2</button>
                                </sweet-modal>
                            </div>
                            <div class="modal-demo">
                                <button type="button" v-on:click="$refs.nested.open()" class="btn btn-theme">
                                    Nested
                                </button>
                                <sweet-modal ref="nested">
                                    This is the parent modal.

                                    <button type="button"  slot="button" @click="$refs.nestedChild.open()" class="btn btn-theme">
                                        Open Child Modal
                                    </button>
                                </sweet-modal>

                                <sweet-modal ref="nestedChild">
                                    This is the child modal.
                                </sweet-modal>
                            </div>
                            <div class="modal-demo">
                                <button type="button" v-on:click="$refs.long_modal.open()" class="btn btn-theme">
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
    import { SweetModal, SweetModalTab } from 'sweet-modal-vue';

    export default {
        data(){
            return {
                icons_leaf:"<i class='icon-fa icon-fa-leaf'></i>",
                icons_sun:"<i class='icon-fa icon-fa-sun-o'></i>",
                icons_anchor:"<i class='icon-fa icon-fa-anchor'></i>"
            }
        },
        components: {
            SweetModal,
            SweetModalTab,
        },
        methods: {
            open() {

            }
        },
    }
</script>