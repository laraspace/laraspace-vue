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
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$refs.modal.open()">
                  Regular Alert
                </button>
                <sweet-modal ref="modal">This is an alert.</sweet-modal>
              </div>
              <div class="modal-demo">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$refs.success_modal.open()">
                  Success Alert
                </button>
                <sweet-modal
                  ref="success_modal"
                  icon="success">
                  This is a success!
                </sweet-modal>
              </div>
              <div class="modal-demo">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$refs.warning_modal.open()">
                  Warning Alert
                </button>
                <sweet-modal
                  ref="warning_modal"
                  icon="warning">
                  This is a success!
                </sweet-modal>
              </div>
              <div class="modal-demo">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$refs.error_modal.open()">
                  Alert with Error and Button
                </button>
                <sweet-modal
                  ref="error_modal"
                  icon="error"
                  title="Oh noes…">
                  This is an error…
                  <button
                    slot="button"
                    type="button"
                    class="btn btn-primary">
                    That's fine!
                  </button>
                </sweet-modal>
              </div>
              <div class="modal-demo">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$refs.blocking_modal.open()">
                  Dark with Blocking Error
                </button>
                <sweet-modal
                  ref="blocking_modal"
                  icon="error"
                  hide-close-button
                  blocking
                  overlay-theme="dark"
                  modal-theme="dark">
                  This is an error…
                  <button
                    slot="button"
                    type="button"
                    class="btn btn-danger"
                    @click="$refs.blocking_modal.close('darkWithBlockingError')">
                    Press this Button
                  </button>
                </sweet-modal>
              </div>
              <div class="modal-demo">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$refs.dark_html_modal.open()">
                  Dark with HTML Content
                </button>
                <sweet-modal
                  ref="dark_html_modal"
                  modal-theme="dark"
                  overlay-theme="dark">
                  This is <b>HTML</b>-<i>Content</i>.
                  <br><br>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/4xgx4k83zzc"
                    frameborder="0"
                    allowfullscreen/>
                </sweet-modal>
              </div>
              <div class="modal-demo">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$refs.additional_modal.open()">
                  Additional Window Controls
                </button>
                <sweet-modal
                  ref="additional_modal"
                  title="Alert">
                  This is an alert.
                  <template slot="box-action">
                    <a href="#">Action 1</a> &nbsp;
                    <a href="#">Action 2</a>
                  </template>
                </sweet-modal>
              </div>
              <div class="modal-demo">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$refs.wide_modal.open()">
                  Ultra Wide
                </button>
                <sweet-modal
                  ref="wide_modal"
                  title="Ultra Wide"
                  width="100%">
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
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$refs.tabbed_modal.open()">
                  Tabbed Modal
                </button>
                <sweet-modal ref="tabbed_modal">
                  <sweet-modal-tab
                    id="tab1"
                    title="Tab 1">
                    Contents of Tab 1
                  </sweet-modal-tab>
                  <sweet-modal-tab
                    id="tab2"
                    title="Tab 2">
                    Contents of Tab 2</sweet-modal-tab>
                  <sweet-modal-tab
                    id="tab3"
                    title="Tab 3"
                    disabled>Tab 3 is disabled
                  </sweet-modal-tab>
                </sweet-modal>
              </div>
              <div class="modal-demo">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$refs.tabbed_modal_icon.open()">
                  Tabbed Modal with Icons
                </button>
                <sweet-modal ref="tabbed_modal_icon">
                  <sweet-modal-tab
                    id="tab1"
                    :icon="icons_anchor"
                    title="Tab 1">Contents of Tab 1
                  </sweet-modal-tab>
                  <sweet-modal-tab
                    id="tab2"
                    :icon="icons_sun"
                    title="Tab 2">
                    Contents of Tab 2
                  </sweet-modal-tab>
                  <sweet-modal-tab
                    id="tab3"
                    :icon="icons_leaf"
                    title="Tab 3"
                    disabled>
                    Tab 3 is disabled
                  </sweet-modal-tab>
                  <!-- icons is an object containing SVG strings -->
                </sweet-modal>
              </div>
              <div class="modal-demo">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$refs.tabbed_modal_title.open()">
                  Tabbed Modal with Title
                </button>
                <sweet-modal
                  ref="tabbed_modal_title"
                  title="This is a Tabbed Modal">
                  <sweet-modal-tab
                    id="tab1"
                    :icon="icons_anchor"
                    title="Tab 1">Contents of Tab 1
                  </sweet-modal-tab>
                  <sweet-modal-tab
                    id="tab2"
                    :icon="icons_sun"
                    title="Tab 2">
                    Contents of Tab 2
                  </sweet-modal-tab>
                  <sweet-modal-tab
                    id="tab3"
                    :icon="icons_leaf"
                    title="Tab 3"
                    disabled>
                    Tab 3 is disabled
                  </sweet-modal-tab>
                  <!-- icons is an object containing SVG strings -->
                </sweet-modal>
              </div>
              <div class="modal-demo">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$refs.tabbed_modal_icon_button.open()">
                  Tabbed Modal with Icons and Buttons
                </button>
                <sweet-modal ref="tabbed_modal_icon_button">
                  <sweet-modal-tab
                    id="tab1"
                    :icon="icons_anchor"
                    title="Tab 1">
                    Contents of Tab 1
                  </sweet-modal-tab>
                  <sweet-modal-tab
                    id="tab2"
                    :icon="icons_sun"
                    title="Tab 2">Contents of Tab 2
                  </sweet-modal-tab>
                  <sweet-modal-tab
                    id="tab3"
                    :icon="icons_leaf"
                    title="Tab 3"
                    disabled>
                    Tab 3 is disabled
                  </sweet-modal-tab>
                  <!-- icons is an object containing SVG strings -->
                  <button
                    slot="button"
                    type="button"
                    class="btn btn-primary">Action1</button>
                  <button
                    slot="button"
                    type="button"
                    class="btn btn-primary">Action2</button>
                </sweet-modal>
              </div>
              <div class="modal-demo">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$refs.nested.open()">
                  Nested
                </button>
                <sweet-modal ref="nested">
                  This is the parent modal.
                  <button
                    slot="button"
                    type="button"
                    class="btn btn-primary"
                    @click="$refs.nestedChild.open()">
                    Open Child Modal
                  </button>
                </sweet-modal>
                <sweet-modal ref="nestedChild">
                  This is the child modal.
                </sweet-modal>
              </div>
              <div class="modal-demo">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="$refs.long_modal.open()">
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
