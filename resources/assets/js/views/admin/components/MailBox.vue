<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">MailBox</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Components</a></li>
        <li class="breadcrumb-item active">MailBox</li>
      </ol>
    </div>
    <div class="Override">
      <div class="row">
        <div class="mail-header col-md-12">
          <nav class="navbar navbar-expand-lg navbar-default justify-content-between">
            <a
              class="navbar-brand"
              href="#">MailBox</a>
            <div class="navbar-toolbar">
              <ul>
                <li>
                  <span class="badge badge-pill badge-danger">5</span>
                  <a href="#"><i class="icon-fa icon-fa-bell"/></a>
                </li>
                <li>
                  <span class="badge badge-pill badge-primary">3</span>
                  <a href="#"><i class="icon-fa icon-fa-envelope"/></a>
                </li>
                <li>
                  <a href="#">
                    <i class="icon-fa icon-fa-comment"/>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div class="row fill">
        <div class="wrapper">
          <div class="sidebar col-md-1">
            <ul>
              <li>
                <a href="#">
                  <i class="icon-fa icon-fa-inbox"/>
                  Inbox
                  <span class="badge badge-pill badge-danger">5</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icon-fa icon-fa-send"/>
                  Sent
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icon-fa icon-fa-edit"/>
                  Draft
                  <span class="badge badge-pill badge-primary">3</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icon-fa icon-fa-star"/>
                  Important
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icon-fa icon-fa-trash "/>
                  Trash
                </a>
              </li>
            </ul>
          </div>
          <div class="mail-content col-md-11">
            <div class="row">
              <table class="table table-hover">
                <tbody>
                  <tr @click="openMail">
                    <td class="cell-50" >
                      <div class="new">
                        <form>
                          <div class="form-group">
                            <input
                              type="checkbox"
                              id="html">
                            <label for="html">&nbsp;</label>
                          </div>
                        </form>
                      </div>
                    </td>
                    <td class="cell-30">
                      <span class="checkbox-custom checkbox-primary">
                        <input
                        type="checkbox">
                      </span>
                    </td>
                    <td>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quibusdam natus sunt? Ipsam possimus recusandae, esse dolores cumque quidem ipsa temporibus? Fugiat pariatur ipsam itaque dicta iste perferendis corporis mollitia! </p>
                    </td>
                    <td class="cell-30">
                      &nbsp;
                    </td>
                    <td class="cell-130">
                      2 hour ago
                    </td>
                  </tr>
                  <tr>
                    <td class="cell-50">
                      <div class="new">
                        <form>
                          <div class="form-group">
                            <input
                              type="checkbox"
                              id="vue">
                            <label for="vue">&nbsp;</label>
                          </div>
                        </form>
                      </div>
                    </td>
                    <td class="cell-30">
                      <span class="checkbox-custom checkbox-primary">
                        <input
                        type="checkbox">
                      </span>
                    </td>
                    <td>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quibusdam natus sunt? Ipsam possimus recusandae, esse dolores cumque quidem ipsa temporibus? Fugiat pariatur ipsam itaque dicta iste perferendis corporis mollitia! </p>
                    </td>
                    <td class="cell-30">
                      <i class="icon-fa icon-fa-paperclip"/>
                    </td>
                    <td class="cell-130">
                      7 hour ago
                    </td>
                  </tr>
                  <tr>
                    <td class="cell-50">
                      <div class="new">
                        <form>
                          <div class="form-group">
                            <input
                              type="checkbox"
                              id="js">
                            <label for="js">&nbsp;</label>
                          </div>
                        </form>
                      </div>
                    </td>
                    <td class="cell-30">
                      <span class="checkbox-custom checkbox-primary">
                        <input
                        type="checkbox">
                      </span>
                    </td>
                    <td>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quibusdam natus sunt? Ipsam possimus recusandae, esse dolores cumque quidem ipsa temporibus? Fugiat pariatur ipsam itaque dicta iste perferendis corporis mollitia! </p>
                    </td>
                    <td class="cell-30">
                      <i class="icon-fa icon-fa-paperclip"/>
                    </td>
                    <td class="cell-130">
                      11 hour ago
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- Scrollable Div -->
              <div :class="['mail',{'mailOpen':isOpen}]">
                <div class="mail-header"><span
                  @:click="closeMail"
                  class="icon-fa icon-fa-close"/></div>
                <div class="mail-msg">Message Body</div>
                <div class="mail-footer">Footer</div>
              </div>
              <!-- Create-mail Modal  -->
              <button
                class="create-mail btn btn-info rounded-circle"
                data-toggle="modal"
                data-target=".ls-example-modal-lg">
                <i class="icon-fa icon-fa-pencil"/>
              </button>
              <div
                class="modal fade ls-example-modal-lg"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true">
                <div
                  class="modal-dialog modal-lg"
                  role="document">
                  <div class="modal-content">
                    <form>
                      <div class="modal-header">
                        <h5
                          class="modal-title"
                          id="exampleModalLabel">Create Mail</h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <select
                          placeholder="To"
                          class="form-control ls-select2"
                          multiple="multiple"
                          style="width:100%">
                          <option value="AK">Alaska</option>
                          <option value="HI">Hawaii</option>
                          <option value="CA">California</option>
                          <option value="NV">Nevada</option>
                          <option value="OR">Oregon</option>
                          <option value="WA">Washington</option>
                        </select>
                        <br><br>
                        <select
                          placeholder="To"
                          class="form-control ls-select2"
                          multiple="multiple"
                          style="width:100%">
                          <option value="AK">Alaska</option>
                          <option value="HI">Hawaii</option>
                          <option value="CA">California</option>
                          <option value="NV">Nevada</option>
                          <option value="OR">Oregon</option>
                          <option value="WA">Washington</option>
                        </select>
                        <br><br>
                        <div class="ls-summernote">
                          Write Somthing..
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal">Cancle</button>
                        <button
                          type="sumbit"
                          class="btn btn-primary">Send</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
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
      isOpen: false
    }
  },
  mounted () {
    jquery('#responsive-datatable').DataTable({
      responsive: true,
      select: true
    })
    // $('.ls-summernote').summernote()
    // $('.ls-multi-select').multiSelect()
    Plugin.initPlugins(['MultiSelect', 'Select2', 'Editors'])
  },
  methods: {
    openMail () {
      this.isOpen = true
    },
    closeMail () {
      this.isOpen = false
    }
  }
}
</script>
<style>
.Override .sidebar, .Override .mail-content
{
    height: 100vh;
    position: relative;
}

.Override.container:before
{
    content: '';
    display: block;
    float: left;
    height: 100%;
}

.Override .fill
{
    color: #efefef;
    position: relative;
}
    .Override .fill:after
    {
        content: '';
        display: block;
        clear: left;
    }

.Override .wrapper
{
    width: 100%;
    height: 100%;
}

.Override .mail-header
{
    background-color: #e4eaec;
}
.Override .mail-header .navbar .navbar-brand
{
  float: left;
}

.Override .sidebar
{
    padding-top:20px;
    float: left;
    position: static;
    border-right: 1px solid #e4eaec;
}
.sidebar li i{
  width: 30px;
}

.sidebar li a
{
    display: block;
    /* font-size: 12px; */
    padding: 15px 0px 12px 0px;
    position: relative;
    text-decoration: none;
}
.sidebar ul{
    list-style: none;
    padding: 0;
}
.Override .mail-content
{
    position: static;
    overflow: auto;
    color:black;
}
.sidebar ul li a span{
    float: right;
    margin-top: 3px;
}
.create-mail{
    position: fixed;
    right: 30px;
    bottom: 130px;
    z-index: 100;
}
.navbar-toolbar ul{
  margin:0px;
}
.navbar-toolbar ul li{
  display: inline-block;
  list-style: none;
  text-align: center;
  margin: 0;
  padding-left:25px ;
  position: relative;
}
.navbar-toolbar ul li span{
    position: absolute;
    right: -10px;
    top: -5px;
}
.navbar-toolbar ul:nth-child(2) li span{
    position: absolute;
    right: 50px;
    top: 10px;
}
.table tr td{
    padding-top: 30px;
    padding-bottom: 30px;
}
.table th{
  height: 50px;
}
.table .cell-50{
  width: 50px;
}
.table .cell-30{
  width: 30px;
}
.table .cell-130{
  width: 130px;
}

/* Custom checkbox */

.form-group {
  display: block;
  margin-bottom: 15px;
}

.form-group input {
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
}

.form-group label {
  position: relative;
  cursor: pointer;
}

.form-group label:before {
  content:'';
  -webkit-appearance: none;
  background-color: transparent;
  border: 2px solid #0079bf;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 10px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 5px;
}

.form-group input:checked + label:after {
  content: '';
  display: block;
  position: absolute;
  top: 2px;
  left: 9px;
  width: 6px;
  height: 14px;
  border: solid #0079bf;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
 /* mail-content */
 .mail{
   position: absolute;
   height: 630px;
   width: 700px;
   border: 1px solid;
   right: -700px;
   bottom: 0px;
 }
.mailOpen{
   position: absolute;
   height: 630px;
   width: 700px;
   border: 1px solid;
   background: ghostwhite;
   right: 0px;
   bottom: 0px;
   transition: 0.5s;
}
</style>
