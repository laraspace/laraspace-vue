<template>
  <div class="main-content mail-box">
    <div class="page-header">
      <h3 class="page-title">MailBox</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Components</a></li>
        <li class="breadcrumb-item active">MailBox</li>
      </ol>
    </div>
    <div class="Override">
      <div class="wrapper">
        <div class="row fill">
          <div :class="['sidebar', {'pull-right-side':pullRightSide}]">
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
            <a
              class="left-sidebar-btn"
              @click="openLeftSidebar">
              <i :class="['icon-fa', {'icon-fa-angle-right':rightAngle, 'icon-fa-angle-left':leftAngle}]"/>
            </a>
          </div>
          <div class="mail-content">
            <div class="menu-penal">
              <div
                class="custom-control custom-checkbox"
                style="display:inline-block">
                <input
                  type="checkbox"
                  v-model="selectAll"
                  class="custom-control-input"
                  id="customCheckAll">
                <label
                  class="custom-control-label"
                  for="customCheckAll"/>
              </div>
              <div class="DropdownAction">
                <button
                  class="btn btn-light"
                  type="button"
                  id="dropdownFolderMenu"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  <i class="icon-fa icon-fa-folder-o"/>
                </button>
                <div
                  class="dropdown-menu"
                  aria-labelledby="dropdownFolderMenu">
                  <a
                    class="dropdown-item"
                    href="#">Dropdown link</a>
                  <a
                    class="dropdown-item"
                    href="#">Dropdown link</a>
                </div>
                <button
                  type="button"
                  class="btn btn-light"
                  id="dropdownTagMenu"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  <i class="icon-fa icon-fa-tag"/>
                </button>
                <div
                  class="dropdown-menu"
                  aria-labelledby="dropdownTagMenu">
                  <a
                    class="dropdown-item"
                    href="#">Dropdown link</a>
                  <a
                    class="dropdown-item"
                    href="#">Dropdown link</a>
                </div>
              </div>
              <div class="filter-action">
                <div class="filter-menu" >
                  <button
                    type="button"
                    class="btn btn-light"
                    id="dropdownCheckMenu"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    Check All<i class="icon-fa icon-fa-angle-down"/>
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownCheckMenu">
                    <a
                      class="dropdown-item"
                      href="#">Dropdown link</a>
                    <a
                      class="dropdown-item"
                      href="#">Dropdown link</a>
                  </div>
                  <div class="mail-search">
                    <input
                      type="email"
                      id="inputEmailTo"
                      placeholder="Search"
                      class="form-control">
                  </div>
                </div>
              </div>
            </div>
            <table class="table table-hover">
              <tbody>
                <tr
                  v-for="(mail,index) in mails"
                  :key="index" >
                  <td class="cell-50">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        v-model="selected"
                        :value="mail"
                        class="custom-control-input"
                        :id="index">
                      <label
                        class="custom-control-label"
                        :for="index"/>
                    </div>
                  </td>
                  <td class="cell-30">
                    <input
                      class="star"
                      type="checkbox"
                      title="bookmark page">
                  </td>
                  <td @click="openMail" >
                    <div class="content">
                      <div class="title">
                        {{ mail.title }}
                      </div>
                      <div class="abstract">
                        {{ mail.abstract }}
                      </div>
                    </div>
                  </td>
                  <td class="cell-30">
                    <i class="icon-fa icon-fa-paperclip"/>
                  </td>
                  <td class="cell-130">
                    2 hour ago
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- Scrollable Div -->
            <div :class="['mail',{'mailOpen':isOpen}]">
              <div class="sidepanel-header">
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                <div class="mail-action">
                  <a
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <i class="icon-fa icon-fa-ellipsis-h"/>
                  </a>
                  <div class="dropdown-menu mail-menu">
                    <ul>
                      <li>Archive</li>
                      <li>Spam</li>
                      <li>Delete</li>
                      <li>Print</li>
                    </ul>
                  </div>
                  <a href="#"><i class="icon-fa icon-fa-chevron-left"/></a>
                  <a href="#"><i class="icon-fa icon-fa-chevron-right"/></a>
                </div>
                <button
                  @click="closeMail"
                  class="sidepanel-close">
                  <i class="icon-fa icon-fa-close"/>
                </button>
              </div>
              <div class="sidepanel-body">
                <div class="message-heading">
                  <div class="message-heading-main">
                    <a>
                      <img
                        src="/assets/img/avatars/avatar.png"
                        alt="avtar"
                        class="avtar-img">
                    </a>
                    <span class="name">John Deo</span>
                    <div class="email">
                      <span>
                        <a href="#">
                          johndeo@gmail.com
                        </a>
                        to
                        <a href="#">
                          me
                        </a>
                      </span>
                    </div>
                    <div class="message-heading-right">
                      <span>3 minute ago</span>
                      <button class="btn btn-light">
                        <i class="icon-fa icon-fa-star-o"/>
                      </button>
                      <button class="btn btn-light">
                        <i class="icon-fa icon-fa-mail-reply"/>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="message-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae quia esse inventore animi eligendi optio temporibus veniam asperiores? Dolorem non quos error, aut est libero nisi veniam provident ratione.
                </div>
                <div class="message-attachment">
                  <p>
                    <i class="icon-fa icon-fa-paperclip"/>
                    Attachments |
                    <a href="#">Download All</a>
                  </p>
                  <ul>
                    <li>
                      <span class="name">abc.mp4</span>
                      <span class="size">(2.50mb)</span>
                      <button class="btn btn-light">
                        <i class="icon-fa icon-fa-cloud-download"/>
                      </button>
                    </li>
                    <li>
                      <span class="name">image.jpeg</span>
                      <span class="size">(1.50mb)</span>
                      <button class="btn btn-light">
                        <i class="icon-fa icon-fa-cloud-download"/>
                      </button>
                    </li>
                  </ul>
                </div>
                <div class="all-mail">
                  <div class="message-heading">
                    <div class="message-heading-main">
                      <a>
                        <img
                          src="/assets/img/avatars/avatar.png"
                          alt="avtar"
                          class="avtar-img">
                      </a>
                      <span class="name">John Deo</span>
                      <div class="email">
                        <span>
                          <a href="#">
                            johndeo@gmail.com
                          </a>
                          to
                          <a href="#">
                            me
                          </a>
                        </span>
                      </div>
                      <div class="message-heading-right">
                        <span>3 minute ago</span>
                        <button class="btn btn-light">
                          <i class="icon-fa icon-fa-star-o"/>
                        </button>
                        <button class="btn btn-light">
                          <i class="icon-fa icon-fa-mail-reply"/>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="message-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae quia esse inventore animi eligendi optio temporibus veniam asperiores.
                  </div>
                  <div class="message-heading">
                    <div class="message-heading-main">
                      <a>
                        <img
                          src="/assets/img/avatars/avatar.png"
                          alt="avtar"
                          class="avtar-img">
                      </a>
                      <span class="name">John Deo</span>
                      <div class="email">
                        <span>
                          <a href="#">
                            johndeo@gmail.com
                          </a>
                          to
                          <a href="#">
                            me
                          </a>
                        </span>
                      </div>
                      <div class="message-heading-right">
                        <span>3 minute ago</span>
                        <button class="btn btn-light">
                          <i class="icon-fa icon-fa-star-o"/>
                        </button>
                        <button class="btn btn-light">
                          <i class="icon-fa icon-fa-mail-reply"/>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="message-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae quia esse inventore animi eligendi optio temporibus veniam asperiores.
                  </div>
                </div>
                <div class="commnet">
                  <textarea
                    name="comment"
                    id="replay"
                    cols="75"
                    rows="4"/>
                  <button class="btn btn-primary">
                    Replay
                  </button>
                </div>
              </div>
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
                      <form>
                        <div class="form-group row">
                          <label
                            for="inputEmailTo"
                            class="col-sm-2 col-form-label">Email To</label>
                          <div class="col-sm-10"><input
                            type="email"
                            id="inputEmailTo"
                            placeholder="To:"
                            class="form-control"></div>
                        </div>
                        <div class="form-group row">
                          <label
                            for="inputSubject"
                            class="col-sm-2 col-form-label">Subject</label>
                          <div class="col-sm-10"><input
                            type="text"
                            id="inputSubject"
                            placeholder="Subject:"
                            class="form-control"></div>
                        </div>
                      </form>
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
</template>
<script>

export default {
  data () {
    return {
      isOpen: false,
      pullRightSide: false,
      rightAngle: true,
      leftAngle: false,
      selected: [],
      mails: [
        { 'id': '1', 'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'abstract': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae quia esse inventore animi eligendi optio temporibus veniam asperiores.' },
        { 'id': '2', 'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'abstract': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae quia esse inventore animi eligendi optio temporibus veniam asperiores.' },
        { 'id': '3', 'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'abstract': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae quia esse inventore animi eligendi optio temporibus veniam asperiores.' },
        { 'id': '4', 'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'abstract': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae quia esse inventore animi eligendi optio temporibus veniam asperiores.' },
        { 'id': '5', 'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'abstract': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae quia esse inventore animi eligendi optio temporibus veniam asperiores.' },
        { 'id': '6', 'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'abstract': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae quia esse inventore animi eligendi optio temporibus veniam asperiores.' },
        { 'id': '7', 'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'abstract': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae quia esse inventore animi eligendi optio temporibus veniam asperiores.' },
        { 'id': '8', 'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'abstract': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae quia esse inventore animi eligendi optio temporibus veniam asperiores.' },
        { 'id': '9', 'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'abstract': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae quia esse inventore animi eligendi optio temporibus veniam asperiores.' },
        { 'id': '10', 'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'abstract': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae quia esse inventore animi eligendi optio temporibus veniam asperiores.' }
      ]
    }
  },
  computed: {
    selectAll: {
      get: function () {
        return this.mails ? this.selected.length === this.mails.length : false
      },
      set: function (value) {
        var selected = []

        if (value) {
          this.mails.forEach(function (mails) {
            selected.push(mails)
          })
        }
        this.selected = selected
      }
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
    },
    openLeftSidebar () {
      this.pullRightSide = !this.pullRightSide
      this.rightAngle = !this.rightAngle
      this.leftAngle = !this.leftAngle
    }
  }
}
</script>
<style>
/* .Override .sidebar, .Override .mail-content
{
    height: 100vh;
    position: relative;
}
.page-heading {
    padding-bottom: 30px;
    padding-top: 30px;
}
.folder-menu{
  position: absolute;
      top: 25px;
    left: -48px;
}
.menu-penal{
  margin:20px 12px;
}
.DropdownAction{
  display: inline-block;
  margin-left: 15px;
}
.DropdownAction button i{
    padding-top: 5px;
    padding-left: 3px;
}
.mail-search{
  display: inline-block ;
}
.filter-action{
  float: right;
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

.table tr td{
    padding-top: 15px;
    padding-bottom: 15px;
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
// Custom checkbox 
.custom-control-label::before {
    width: 1.5rem;
    height: 1.5rem;
}
.custom-control-label::after {
    width: 1.5rem;
    height: 1.5rem;
}
 // mail-content 
 .mail{
   position: absolute;
   background: ghostwhite;
   height: 100%;
   width: 700px;
   right: -720px;
   bottom: 0px;
   box-shadow: -10px 0 20px 0 rgba(66,66,66,.2);
   z-index: 1050;
   transition: right 0.5s;
 }
.mailOpen{
   right: 0px;
}
.sidepanel-header{
    padding: 40px 30px;
    padding-right: 120px;
    background-color: #0bb2d4;
}
.sidepanel-close{
    position: absolute;
    left: 665px;
    top: 15px;
    background: none;
    border: none;
}
.sidepanel-body{
      padding: 0 30px;
}
.message-heading{
    position: relative;
    padding: 20px 0px;
}
.mail-action a{
  margin-left:12px;
}
.mail-action{
    position: absolute;
    right: 10px;
    top: 95px;
}
.mail-menu ul li{
padding-left: 15px;
padding-bottom: 10px;
}
.mail-menu ul{
color:white;
list-style: none;

}
.chat{
    position: absolute;
    right: -270px;;
    height: 100%;
    width: 250px;
    background: white;
    z-index: 1050;
    transition: right 0.5s;
    box-shadow: -5px 0 20px 0 rgba(66,66,66,.2);
}
.chatOpen{
  right: 0;
}
.checkbox-star::before{
  content: "\F005";
  color: #007dcc;
   width: 0;
  height: 0;
  font: normal normal normal 26px/1 FontAwesome;
}
.checkbox-star::after{
    content: "\F006";
    font: normal normal normal 26px/1 FontAwesome;
    width: 0;
    height: 0;
    // color: #eeeeee; 
    color:gray;
} */
</style>
