<template>
<div class="main-content buttons-demo">
    <div class="page-header">
      <h3 class="page-title">ToolTips</h3>
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
            <div class="form-group">
              <h5 class="section-semi-title">Reactive content</h5>
              <button class="btn btn-primary" v-tooltip.top-center="msg">Hover me</button>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <h5 class="section-semi-title">Customize</h5>
              <select name="position" v-model="positioin">
                <option value="top" >Top</option>
                <option value="right">Right</option>
                <option value="bottom">Bottom</option>
                <option value="left">Left</option>
              </select>
              <button class="btn btn-primary"
                v-tooltip="{
                  content: msg,
                  placement:positioin + '-center',
                  classes: ['info'],
                  targetClasses: ['it-has-a-tooltip'],
                  offset: 100,
                  delay: {
                    show: 500,
                    hide: 300,
                  },
                }">
                Customize Me
              </button>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-sm-6">
            <div class="form-group">
              <h5 class="section-semi-title">Manual Mode</h5>
              <div class="form">
                <label><input type="checkbox" name="open" v-model="isVisible" /> Enable</label>
              </div>
              <template v-if="isVisible">
                <div class="form">
                  <label><input type="radio" name="open2" v-model="isOpen" :value="true" /> Show</label>
                  <label><input type="radio" name="open2" v-model="isOpen" :value="false" /> Hide</label>
                </div>

                <button
                  class="btn btn-primary"
                  v-tooltip="{
                    content: msg,
                    show: isOpen,
                    trigger: 'manual',
                    placement: 'bottom',
                  }"
                >A button</button>
              </template>
            </div>
          </div>
          <div class="col-sm-6 ">
            <div class="form-group">
              <h5 class="section-semi-title">Open Group Buttons</h5>
               <a class="btn btn-danger" v-close-popover.all>Close All</a>
               
               <div style="display:flex; justify-content:space-around;">
                <v-popover
                  :auto-hide="false"
                  open-group="group1">
                  <button class="btn btn-primary">Group 1</button>
                  <template slot="popover">
                    <p>
                      {{ msg }}
                    </p>
                    <a class="btn btn-info" v-close-popover>Close</a>
                  </template>
                  <!-- ... -->
                </v-popover>

                <v-popover
                  :auto-hide="false"
                  open-group="group1">
                  <button class="btn btn-primary">Group 1</button>
                  <template slot="popover">
                    <p>
                      {{ msg }}
                    </p>
                    <a class="btn btn-info" v-close-popover>Close</a>
                  </template>
                </v-popover>

                <v-popover
                  :auto-hide="false"
                  open-group="group2">
                  <button class="btn btn-primary">Group 2</button>
                  <template slot="popover">
                    <p>
                      {{ msg }}
                    </p>
                    <a class="btn btn-info" v-close-popover>Close</a>
                  </template>
                </v-popover>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-sm-6">
            <div class="form-group">
              <h5 class="section-semi-title">Use with components to create a popover</h5>
               
                <v-popover
                  offset="16"
                  :disabled="!isEnabled"
                  :auto-hide="autohide">

                  <label><input type="checkbox" name="open" v-model="isEnabled" /> Enable</label>
                  <label><input type="checkbox" name="hide" v-model="autohide" /> Autohide</label><br>
                  <button class="btn btn-primary">Click me</button>

                  <template slot="popover">
                    <input class="tooltip-content" v-model="msg" placeholder="Tooltip content" />
                    <p>
                      {{ msg }}
                    </p>
                    
                    <a class="btn btn-info" v-close-popover>Close</a>
                  </template>
                </v-popover>
            </div>
          </div>
          <div class="col-sm-6">
            <h5 class="section-semi-title">Async content</h5>
            
            <div class="form-group">
              <button
                class="btn btn-primary"
                v-tooltip="{
                  content: asyncContent,
                  loadingContent: '<i>Loading...</i>',
                   delay: {
                    show: 900,
                    hide: 300,
                  },
                }">
                Hover me
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script>

export default {
    data() {
      return{
        msg: 'This is a button.',
        count: 10,
        isVisible:'',
        isOpen:'',
        isEnabled:'true',
        autohide:'false',
        positioin:'top',
        asyncContent:'this Content come from server!'
      }
    },
   
  }
</script>
