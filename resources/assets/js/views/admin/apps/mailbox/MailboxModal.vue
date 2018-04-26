<template>
  <div :class="['mailbox-modal', { 'is-visible': isVisible }]">
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
        class="sidepanel-close"
        @click="closeModal">
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
          id="replay"
          name="comment"
          cols="75"
          rows="4"/>
        <button class="btn btn-primary">
          Replay
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  methods: {
    closeModal () {
      this.$emit('close')
    }
  }
}
</script>
