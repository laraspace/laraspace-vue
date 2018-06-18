<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Notifications</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Notifications</a></li>
        <li class="breadcrumb-item active">Notifications</li>
      </ol>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h6>Toastr</h6>
          </div>
          <div class="card-body buttons-demo">
            <div class="row">
              <div class="col-sm-12">
                <button class="btn btn-success" @click="toastrNotifs('success')">
                  Success
                </button>
                <button class="btn btn-info" @click="toastrNotifs('info')">
                  Info
                </button>
                <button class="btn btn-danger" @click="toastrNotifs('error')">
                  Error
                </button>
                <button class="btn btn-warning" @click="toastrNotifs('warning')">
                  Warning
                </button>
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
            <h6>Notie.js</h6>
          </div>
          <div class="card-body buttons-demo">
            <div class="row">
              <div class="col-sm-12">
                <button class="btn btn-success" @click="notieNotifs('success')">
                  Success
                </button>
                <button class="btn btn-info" @click="notieNotifs('info')">
                  Info
                </button>
                <button class="btn btn-danger" @click="notieNotifs('error')">
                  Error
                </button>
                <button class="btn btn-warning" @click="notieNotifs('warning')">
                  Warning
                </button>
                <button class="btn btn-primary" @click="notieNotifs('confirm')">
                  Confirm
                </button>
                <button class="btn btn-outline-primary" @click="notieNotifs('input')">
                  Input
                </button>
                <button class="btn btn-primary btn-rounded" @click="notieNotifs('select')">
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type='text/babel'>
export default {
  mounted () {
    toastr.options = {
      closeButton: true,
      debug: false,
      positionClass: 'toast-top-right',
      onclick: null,
      showDuration: '1000',
      hideDuration: '1000',
      timeOut: '5000',
      extendedTimeOut: '1000',
      showEasing: 'swing',
      hideEasing: 'linear',
      showMethod: 'fadeIn',
      hideMethod: 'fadeOut'
    }
  },
  methods: {
    toastrNotifs (type) {
      switch (type) {
        case 'success':
          toastr[type]('Hello World', 'Note!')
          break
        case 'warning':
          toastr[type]('Hello World', 'Note!')
          break
        case 'error':
          toastr[type]('Hello World', 'Note!')
          break
        case 'info':
          toastr[type]('Hello World', 'Note!')
          break
        default:
          break
      }
    },
    notieNotifs (type) {
      switch (type) {
        case 'success':
          notie.alert({ type: 1, text: 'Success!' })
          break
        case 'warning':
          notie.alert({ type: 2, text: 'Warning!' })
          break
        case 'error':
          notie.alert({ type: 3, text: 'Error!' })
          break
        case 'info':
          notie.alert({ type: 4, text: 'Info!' })
          break
        case 'confirm':
          notie.confirm({
            text:
              "Are you sure you want to do that?<br><b>That's a bold move...</b>",
            cancelCallback: function () {
              notie.alert({ type: 3, text: 'Aw, why not? :(', time: 2 })
            },
            submitCallback: function () {
              notie.alert({ type: 1, text: 'Good choice! :D', time: 2 })
            }
          })
          break
        case 'input':
          notie.input({
            text: 'Please enter your email:',
            submitText: 'Submit',
            cancelText: 'Cancel',
            cancelCallback: function (value) {
              notie.alert({
                type: 3,
                text: 'You cancelled with this value: ' + value
              })
            },
            submitCallback: function (value) {
              notie.alert({ type: 1, text: 'You entered: ' + value })
            },
            value: 'jane@doe.com',
            type: 'email',
            placeholder: 'name@example.com'
          })
          break
        case 'select':
          notie.select({
            text: 'Demo item #1, owner is Bytefury',
            cancelText: 'Close',
            cancelCallback: function () {
              notie.alert({ type: 5, text: 'Cancel!' })
            },
            choices: [
              {
                text: 'Share',
                handler: function () {
                  notie.alert({ type: 1, text: 'Share item!' })
                }
              },
              {
                text: 'Open',
                handler: function () {
                  notie.alert({ type: 1, text: 'Open item!' })
                }
              },
              {
                type: 2,
                text: 'Edit',
                handler: function () {
                  notie.alert({ type: 2, text: 'Edit item!' })
                }
              },
              {
                type: 3,
                text: 'Delete',
                handler: function () {
                  notie.alert({ type: 3, text: 'Delete item!' })
                }
              }
            ]
          })
          break
        case 'date':
          notie.date({
            value: new Date(2015, 8, 27),
            cancelCallback: function (date) {
              notie.alert({
                type: 3,
                text: 'You cancelled: ' + date.toISOString()
              })
            },
            submitCallback: function (date) {
              notie.alert({
                type: 1,
                text: 'You selected: ' + date.toISOString()
              })
            }
          })
          break

        default:
          notie.alert(1, 'Success!')
      }
    }
  }
}
</script>
