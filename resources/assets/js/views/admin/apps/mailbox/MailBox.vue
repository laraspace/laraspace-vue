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
    <div class="mailbox">
      <mailbox-sidebar />

      <div class="mailbox-content">
        <div class="mailbox-content-header">
          <div class="mailbox-actions">
            <div
              class="custom-control custom-checkbox"
              style="display:inline-block"
            >
              <input
                id="customCheckAll"
                v-model="selectAll"
                type="checkbox"
                class="custom-control-input"
              >
              <label
                class="custom-control-label"
                for="customCheckAll"
              />
            </div>

            <button
              id="dropdownFolderMenu"
              class="btn btn-light"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              <i class="icon-fa icon-fa-folder-o"/>
            </button>

            <button
              id="dropdownTagMenu"
              type="button"
              class="btn btn-light"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              <i class="icon-fa icon-fa-tag"/>
            </button>
          </div>

          <div class="mailbox-filters">
            <button
              id="dropdownCheckMenu"
              type="button"
              class="btn btn-light"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              Check All <i class="icon-fa icon-fa-angle-down"/>
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
                id="inputEmailTo"
                type="email"
                placeholder="Search"
                class="form-control">
            </div>
          </div>
        </div>
        <table class="table table-hover">
          <tbody>
            <tr v-for="(mail,index) in mails" :key="index">
              <td class="cell-50">
                <div class="custom-control custom-checkbox">
                  <input
                    :id="index"
                    v-model="selected"
                    :value="mail"
                    type="checkbox"
                    class="custom-control-input">
                  <label
                    :for="index"
                    class="custom-control-label"/>
                </div>
              </td>
              <td class="cell-30">
                <input
                  class="star"
                  type="checkbox"
                  title="important">
              </td>
              <td class="cell-50">
                <a>
                  <img
                    src="/assets/img/avatars/avatar.png"
                    alt="avtar"
                    class="avtar-img">
                </a>
              </td>
              <td @click="openModal" >
                <div class="content">
                  <div class="title">
                    {{ mail.title }}
                  </div>
                </div>
              </td>
              <td class="cell-30 attachment">
                <i class="icon-fa icon-fa-paperclip"/>
              </td>
              <td class="cell-130">
                2 hour ago
              </td>
            </tr>
          </tbody>
        </table>
        <div class="mailbox-content-footer">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a
                  class="page-link"
                  href="#"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">4</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">5</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">6</a>
              </li>
              <li class="page-item">
                <a
                  class="page-link"
                  href="#"
                  aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <mailbox-modal :is-visible="isModalVisible" @close="closeModal"/>

        <button class="compose-mail-btn" @click="openCompose">
          <i class="icon-fa icon-fa-pencil"/>
        </button>

        <mailbox-compose-modal ref="compose"/>
      </div>
    </div>
  </div>
</template>

<script>
import MailboxSidebar from './MailboxSidebar'
import MailboxModal from './MailboxModal'
import MailboxComposeModal from './MailboxComposeModal'

export default {
  components: {
    MailboxSidebar,
    MailboxModal,
    MailboxComposeModal
  },
  data () {
    return {
      isModalVisible: false,
      tab: 1,
      isLeftSidebarVisible: false,
      rightAngle: true,
      leftAngle: false,
      selected: [],
      mails: [
        { 'id': '1', 'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        { 'id': '2', 'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        { 'id': '3', 'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        { 'id': '4', 'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        { 'id': '5', 'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        { 'id': '6', 'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        { 'id': '7', 'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        { 'id': '8', 'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' }
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
  methods: {
    openModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    },
    openCompose () {
      this.$refs.compose.openModal()
    }
  }
}
</script>
