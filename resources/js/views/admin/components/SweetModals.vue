<template>
  <div class="main-content sweet-modal-demo">
    <div class="page-header">
      <h3 class="page-title">Modals</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Components</a></li>
        <li class="breadcrumb-item active">Modals</li>
      </ol>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h6>Simple Modals</h6>
          </div>
          <div class="card-body buttons-demo">
            <div class="row">
              <div class="col-sm-6">
                <h5 class="section-semi-title">Basic Alerts</h5>
                <p>Simple alerts to notify about a particular status</p>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$refs.modal.open()"
                >
                  Regular
                </button>
                <sweet-modal ref="modal">This is a regular alert!</sweet-modal>

                <button
                  type="button"
                  class="btn btn-success"
                  @click="$refs.success_modal.open()"
                >
                  Success
                </button>
                <sweet-modal ref="success_modal" icon="success">
                  This is a success alert!
                </sweet-modal>

                <button
                  type="button"
                  class="btn btn-warning"
                  @click="$refs.warning_modal.open()"
                >
                  Warning
                </button>
                <sweet-modal ref="warning_modal" icon="warning">
                  This is a warning alert!
                </sweet-modal>
              </div>
              <div class="col-sm-6">
                <h5 class="section-semi-title">Custom Buttons</h5>
                <p>Alert with a custom button & title</p>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$refs.error_modal.open()"
                >
                  Open
                </button>
                <sweet-modal
                  ref="error_modal"
                  icon="error"
                  title="Oh noes…"
                >
                  This is an error…
                  <button
                    slot="button"
                    type="button"
                    class="btn btn-primary"
                    @click="$refs.error_modal.close()"
                  >
                    That's fine!
                  </button>
                </sweet-modal>
              </div>
            </div>

            <div class="row mt-5">
              <div class="col-sm-6">
                <h5 class="section-semi-title">Dark Theme</h5>
                <p>It also supports a dark theme for modal and the modal overlay</p>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$refs.blocking_modal.open()"
                >
                  Dark with Blocking Error
                </button>
                <sweet-modal
                  ref="blocking_modal"
                  icon="warning"
                  hide-close-button
                  blocking
                  overlay-theme="dark"
                  modal-theme="dark"
                >
                  This is an error…
                  <button
                    slot="button"
                    type="button"
                    class="btn btn-theme"
                    @click="$refs.blocking_modal.close('darkWithBlockingError')"
                  >
                    Confirm
                  </button>
                </sweet-modal>
              </div>
              <div class="col-sm-6">
                <h5 class="section-semi-title">Custom HTML</h5>
                <p>You can add custom HTML as content for modal including Videos & tables (iframe)</p>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$refs.dark_html_modal.open()"
                >
                  Dark with HTML Content
                </button>
                <sweet-modal
                  ref="dark_html_modal"
                  modal-theme="dark"
                  overlay-theme="dark"
                >
                  This is <b>HTML</b>-<i>Content</i>.
                  <br><br>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/4xgx4k83zzc"
                    frameborder="0"
                    allowfullscreen
                  />
                </sweet-modal>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-sm-6">
                <h5 class="section-semi-title">Window Controls</h5>
                <p>Add custom links or actions to the modal title</p>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$refs.additional_modal.open()"
                >
                  Open
                </button>
                <sweet-modal ref="additional_modal" title="Alert">
                  This is an alert.
                  <template slot="box-action">
                    <a href="#">Action 1</a> &nbsp;
                    <a href="#">Action 2</a>
                  </template>
                </sweet-modal>
              </div>
              <div class="col-sm-6">
                <h5 class="section-semi-title">Custom Width</h5>
                <p>Set a custom width to your modal based on your requirements</p>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$refs.wide_modal.open()"
                >
                  Open
                </button>
                <sweet-modal
                  ref="wide_modal"
                  title="Ultra Wide"
                  width="90%"
                >
                  This is a very wide modal.
                </sweet-modal>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-sm-6">
                <h5 class="section-semi-title">Nested Modals</h5>
                <p>You can also have a nested modal which gets triggered by the parent modal thus allowing a possibility to have multiple modals to be open at a time</p>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$refs.nested.open()"
                >
                  Open
                </button>
                <sweet-modal ref="nested">
                  This is the parent modal.
                  <button
                    slot="button"
                    type="button"
                    class="btn btn-primary"
                    @click="$refs.nestedChild.open()"
                  >
                    Open Child Modal
                  </button>
                </sweet-modal>
                <sweet-modal ref="nestedChild">
                  This is the child modal.
                </sweet-modal>
              </div>
              <div class="col-sm-6">
                <h5 class="section-semi-title">Long Scrolling Modal</h5>
                <p>You can add as much content as you wish! It'll automatically scroll</p>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$refs.long_modal.open()"
                >
                  Open
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
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h6>Tabbed Modals</h6>
          </div>
          <div class="card-body buttons-demo">
            <div class="row">
              <div class="col-sm-6">
                <h5 class="section-semi-title">Basic</h5>
                <p>You can have tabs directly inside the modal content</p>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$refs.tabbed_modal.open()"
                >
                  Open
                </button>
                <sweet-modal ref="tabbed_modal">
                  <sweet-modal-tab id="tab1" title="Tab 1">
                    Contents of Tab 1
                  </sweet-modal-tab>
                  <sweet-modal-tab id="tab2" title="Tab 2">
                    Contents of Tab 2
                  </sweet-modal-tab>
                  <sweet-modal-tab
                    id="tab3"
                    title="Tab 3"
                    disabled
                  >
                    Tab 3 is disabled
                  </sweet-modal-tab>
                </sweet-modal>
              </div>
              <div class="col-sm-6">
                <h5 class="section-semi-title">With Icons</h5>
                <p>Use custom icons to represent the tabs instead of just a boring title</p>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$refs.tabbed_modal_icon.open()"
                >
                  Open
                </button>
                <sweet-modal ref="tabbed_modal_icon">
                  <sweet-modal-tab
                    id="tab1"
                    :icon="icons_anchor"
                    title="Tab 1"
                  >
                    Contents of Tab 1
                  </sweet-modal-tab>
                  <sweet-modal-tab
                    id="tab2"
                    :icon="icons_sun"
                    title="Tab 2"
                  >
                    Contents of Tab 2
                  </sweet-modal-tab>
                  <sweet-modal-tab
                    id="tab3"
                    :icon="icons_leaf"
                    title="Tab 3"
                    disabled
                  >
                    Tab 3 is disabled
                  </sweet-modal-tab>
                  <!-- icons is an object containing SVG strings -->
                </sweet-modal>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-sm-6">
                <h5 class="section-semi-title">Custom Icon and Buttons</h5>
                <p>Use a custom icon and multiple actions inside the modal</p>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$refs.tabbed_modal_icon_button.open()"
                >
                  Open
                </button>
                <sweet-modal ref="tabbed_modal_icon_button">
                  <sweet-modal-tab
                    id="tab1"
                    :icon="icons_anchor"
                    title="Tab 1"
                  >
                    Contents of Tab 1
                  </sweet-modal-tab>
                  <sweet-modal-tab
                    id="tab2"
                    :icon="icons_sun"
                    title="Tab 2"
                  >
                    Contents of Tab 2
                  </sweet-modal-tab>
                  <sweet-modal-tab
                    id="tab3"
                    :icon="icons_leaf"
                    title="Tab 3"
                    disabled
                  >
                    Tab 3 is disabled
                  </sweet-modal-tab>
                  <!-- icons is an object containing SVG strings -->
                  <button
                    slot="button"
                    type="button"
                    class="btn btn-primary"
                  >
                    Action1
                  </button>
                  <button
                    slot="button"
                    type="button"
                    class="btn btn-primary"
                  >
                    Action2
                  </button>
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
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'

export default {
  components: {
    SweetModal,
    SweetModalTab
  },
  data () {
    return {
      icons_leaf: '<i class="icon-fa icon-fa-leaf"></i>',
      icons_sun: '<i class="icon-fa icon-fa-sun-o"></i>',
      icons_anchor: '<i class="icon-fa icon-fa-anchor"></i>'
    }
  },
  install (Vue, options) {
    Vue.component('SweetModal', SweetModal)
    Vue.component('SweetModalTab', SweetModalTab)
  }
}
</script>
