<template>
<div class="main-content">
    <div class="page-header">
      <h3 class="page-title">ToolTips</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Components</a></li>
        <li class="breadcrumb-item active">Tooltips</li>
      </ol>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Reactive content</h6>
      </div>
      <div class="card-body">
         <button class="btn btn-primary" v-tooltip.top-center="msg">Hover me</button>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Customize Bottom</h6>
      </div>
      <div class="card-body">
        <button class="btn btn-secondary"  v-tooltip="{
            content: msg,
            placement: 'bottom-center',
            classes: ['info'],
            targetClasses: ['it-has-a-tooltip'],
            offset: 100,
            delay: {
              show: 500,
              hide: 300,
            },
          }">
          Bottom
        </button>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Customize Top</h6>
      </div>
      <div class="card-body">
         <button class="btn btn-secondary" v-tooltip="{
          content: msg,
          placement: 'top-center',
          classes: ['info'],
          targetClasses: ['it-has-a-tooltip'],
          offset: 100,
          delay: {
            show: 500,
            hide: 300,
          },
        }">
        Top
        </button>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Customize right</h6>
      </div>
      <div class="card-body">
         <button class="btn btn-secondary" v-tooltip="{
          content: msg,
          placement: 'right-center',
          classes: ['info'],
          targetClasses: ['it-has-a-tooltip'],
          offset: 100,
          delay: {
            show: 500,
            hide: 300,
          },
        }">
        Right
        </button>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Customize left</h6>
      </div>
      <div class="card-body">
        <button class="btn btn-secondary" v-tooltip="{
          content: msg,
          placement: 'left-center',
          classes: ['info'],
          targetClasses: ['it-has-a-tooltip'],
          offset: 100,
          delay: {
              show: 500,
              hide: 200,
            },
          }">
          Left
        </button>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Manual mode</h6>
      </div>
      <div class="card-body">
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
    <div class="card">
      <div class="card-header">

      </div>
      <div class="card-body">
        <v-popover
          offset="16"
          :disabled="!isEnabled"
          :auto-hide="autohide"
          >
          <label><input type="checkbox" name="open" v-model="isEnabled" /> Enable</label>
          <label><input type="checkbox" name="hide" v-model="autohide" /> Autohide</label><br>
          <button class="btn btn-primary">Click me</button>

          <template slot="popover">
            <input class="tooltip-content" v-model="msg" placeholder="Tooltip content" />
            <p>
              {{ msg }}
            </p>
            
            <a v-close-popover>Close</a>
          </template>
        </v-popover>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Open group</h6>
      </div>
      <div class="card-body">
       <a class="btn btn-danger" v-close-popover.all>Close All</a>
        <v-popover
          :auto-hide="false"
          open-group="group1"
        >
          <button class="btn btn-primary">Click me</button>
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
          open-group="group1"
        >
           <button class="btn btn-primary">Click me</button>
           <template slot="popover">
            <p>
              {{ msg }}
            </p>
            <a class="btn btn-info" v-close-popover>Close</a>
          </template>
        </v-popover>

        <v-popover
          :auto-hide="false"
          open-group="group2"
        >
           <button class="btn btn-primary">Click me</button>
           <template slot="popover">
            <p>
              {{ msg }}
            </p>
            <a class="btn btn-info" v-close-popover>Close</a>
          </template>
        </v-popover>
      </div>
    </div>
    <div class="card">
      <div class="card-header">

      </div>
      <div class="card-body">
        
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
        autohide:'false'
      }
    },
  }
</script>
