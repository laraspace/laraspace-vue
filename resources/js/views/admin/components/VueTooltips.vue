<template>
  <div class="main-content buttons-demo">
    <div class="page-header">
      <h3 class="page-title">Tooltips</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Components</a></li>
        <li class="breadcrumb-item active">Tooltips</li>
      </ol>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-6">
            <h5 class="section-semi-title">Reactive content</h5>
            <div class="form-group">
              <label>Tooltip Text</label>
              <input
                v-model="tooltipText"
                type="text"
                class="form-control"
              >
            </div>
            <button v-tooltip.top-center="tooltipText" class="btn btn-primary">Hover me</button>
          </div>

          <div class="col-sm-6">
            <h5 class="section-semi-title">Position</h5>
            <div class="form-group">
              <label>Select a Position</label>
              <select v-model="position" name="position" class="form-control">
                <option value="top" >Top</option>
                <option value="right">Right</option>
                <option value="bottom">Bottom</option>
                <option value="left">Left</option>
              </select>
            </div>

            <button
              v-tooltip="{
                content: tooltipText,
                placement: position + '-center',
              }"
              class="btn btn-primary"
            >
              Hover me
            </button>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-sm-6">
            <h5 class="section-semi-title">Show/Hide Delay</h5>
            <button
              v-tooltip="{
                content: tooltipText,
                delay: {
                  show: 500,
                  hide: 300,
                },
              }"
              class="btn btn-primary"
            >
              Hover me
            </button>
          </div>
          <div class="col-sm-6">
            <h5 class="section-semi-title">Offset & custom classes</h5>
            <button
              v-tooltip="{
                content: tooltipText,
                classes: ['info'],
                targetClasses: ['it-has-a-tooltip'],
                offset: 30,
              }"
              class="btn btn-primary"
            >
              Hover me
            </button>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-sm-6">
            <div class="form-group">
              <h5 class="section-semi-title">Manual Mode</h5>
              <div class="form-group">
                <div class="form-check form-check-inline">
                  <input
                    id="enableCheckbox"
                    v-model="isVisible"
                    name="open"
                    class="form-check-input"
                    type="checkbox"
                    value="option1"
                  >
                  <label class="form-check-label" for="enableCheckbox">Enable</label>
                </div>
              </div>

              <template v-if="isVisible">
                <div class="form-group">
                  <div class="form-check form-check-inline">
                    <input
                      id="showRadio"
                      v-model="isOpen"
                      :value="true"
                      class="form-check-input"
                      type="radio"
                    >
                    <label class="form-check-label" for="showRadio">Show</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      id="hideRadio"
                      v-model="isOpen"
                      :value="false"
                      class="form-check-input"
                      type="radio"
                    >
                    <label class="form-check-label" for="hideRadio">Hide</label>
                  </div>
                </div>

                <button
                  v-tooltip="{
                    content: tooltipText,
                    show: isOpen,
                    trigger: 'manual',
                    placement: 'bottom',
                  }"
                  class="btn btn-primary"
                >
                  A button
                </button>
              </template>
            </div>
          </div>
          <div class="col-sm-6">
            <h5 class="section-semi-title">Groups</h5>
            <div class="form-group">
              <button v-close-popover.all class="btn btn-warning" >Close All</button>
            </div>

            <div class="row align-items-start">
              <v-popover
                :auto-hide="false"
                open-group="group1"
                class="col-sm-auto"
              >
                <button class="btn btn-primary">Click Group 1</button>
                <template slot="popover">
                  <p>
                    {{ tooltipText }}
                  </p>
                  <button v-close-popover class="btn btn-theme btn-sm">Close</button>
                </template>
                <!-- ... -->
              </v-popover>

              <v-popover
                :auto-hide="false"
                class="col-sm-auto"
                open-group="group1"
              >
                <button class="btn btn-primary">Click Group 1</button>
                <template slot="popover">
                  <p>
                    {{ tooltipText }}
                  </p>
                  <button v-close-popover class="btn btn-theme btn-sm">Close</button>
                </template>
              </v-popover>

              <v-popover
                :auto-hide="false"
                class="col-sm-auto"
                open-group="group2"
              >
                <button class="btn btn-primary">Click Group 2</button>
                <template slot="popover">
                  <p>
                    {{ tooltipText }}
                  </p>
                  <button v-close-popover class="btn btn-theme btn-sm">Close</button>
                </template>
              </v-popover>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-sm-6">
            <div class="form-group">
              <h5 class="section-semi-title">Custom components for popover</h5>
              <div class="form-group">
                <div class="form-check form-check-inline">
                  <input
                    id="enableCheck"
                    v-model="isEnabled"
                    class="form-check-input"
                    type="checkbox"
                  >
                  <label class="form-check-label" for="enableCheck">
                    Enable
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    id="autoHideCheck"
                    v-model="autohide"
                    class="form-check-input"
                    type="checkbox"
                  >
                  <label class="form-check-label" for="autoHideCheck">
                    Hide on clicking outside (autohide)
                  </label>
                </div>
              </div>

              <v-popover :disabled="!isEnabled" :auto-hide="autohide">
                <button class="btn btn-primary">Click me</button>

                <template slot="popover">
                  <p>
                    {{ tooltipText }}
                  </p>

                  <button v-close-popover class="btn btn-theme btn-sm">Close</button>
                </template>
              </v-popover>
            </div>
          </div>
          <div class="col-sm-6">
            <h5 class="section-semi-title">Async content</h5>

            <div class="form-group">
              <button
                v-tooltip="{
                  content: asyncContent,
                  loadingContent: '<i>Loading...</i>',
                }"
                class="btn btn-primary"
              >
                Hover me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tooltipText: 'I am awesome!',
      count: 10,
      isVisible: '',
      isOpen: '',
      isEnabled: true,
      autohide: false,
      position: 'top'
    }
  },
  methods: {
    asyncContent () {
      return new Promise((resolve) => {
        setTimeout(() => {
          return resolve('Hey! This content is loaded from serverside')
        }, 2000)
      })
    }
  }
}
</script>
