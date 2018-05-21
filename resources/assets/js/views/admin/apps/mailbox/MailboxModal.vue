<template>
  <div :class="['mailbox-modal', { 'is-visible': isVisible }]" >
    <div class="mail-header">
      <div class="mail-actions">
        <ul class="mail-action-list">
          <li class="action">
            <a href="#" ><i class="icon-fa icon-fa-arrow-left"></i></a>
          </li>
          <li class="action">
            <a href="#" ><i class="icon-fa icon-fa-exclamation"></i></a>
          </li>
          <li class="action">
            <a href="#" ><i class="icon-fa icon-fa-trash"></i></a>
          </li>
          <li class="action">
            <a href="#" ><i class="icon-fa icon-fa-envelope-open icon-fa-fw"></i></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="mail-body">
      <h3 class="mail-subject">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>

      <div class="message">
        <div class="message-heading">
          <div class="message-from">
            <a class="avatar">
              <img
                src="/assets/img/avatars/avatar.png"
                alt="avatar"
                class="avatar-img"
              >
            </a>
            <div class="from-text">
              <div class="name">John Deo</div>
              <div class="email">
                <a href="#">
                  johndeo@gmail.com
                </a>
                to
                <a href="#">
                  me
                </a>
              </div>
            </div>
          </div>

          <div class="message-heading-right">
            <span>3 minute ago</span>
            <button class="btn btn-light btn-icon btn-sm">
              <i class="icon-fa icon-fa-star-o"/>
            </button>
            <button class="btn btn-light btn-icon btn-sm">
              <i class="icon-fa icon-fa-mail-reply"/>
            </button>
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
              <button class="btn btn-light btn-icon btn-sm">
                <i class="icon-fa icon-fa-cloud-download"/>
              </button>
            </li>
            <li>
              <span class="name">image.jpeg</span>
              <span class="size">(1.50mb)</span>
              <button class="btn btn-light btn-icon btn-sm">
                <i class="icon-fa icon-fa-cloud-download"/>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="message">
        <div class="message-heading">
          <div class="message-from">
            <a class="avatar">
              <img
                src="/assets/img/avatars/avatar.png"
                alt="avatar"
                class="avatar-img"
              >
            </a>
            <div class="from-text">
              <span class="name">John Deo</span>
              <div class="email">
                <a href="#">
                  johndeo@gmail.com
                </a>
                to
                <a href="#">
                  me
                </a>
              </div>
            </div>
          </div>

          <div class="message-heading-right">
            <span>3 minute ago</span>
            <button class="btn btn-light btn-icon btn-sm">
              <i class="icon-fa icon-fa-star-o"/>
            </button>
            <button class="btn btn-light btn-icon btn-sm">
              <i class="icon-fa icon-fa-mail-reply"/>
            </button>
          </div>
        </div>
        <div class="message-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae quia esse inventore animi eligendi optio temporibus veniam asperiores.
        </div>
      </div>
      <div class="message">
        <div class="message-heading">
          <div class="message-from">
            <a class="avatar">
              <img
                src="/assets/img/avatars/avatar.png"
                alt="avatar"
                class="avatar-img"
              >
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
          </div>

          <div class="message-heading-right">
            <span>3 minute ago</span>
            <button class="btn btn-light btn-icon btn-sm">
              <i class="icon-fa icon-fa-star-o"/>
            </button>
            <button class="btn btn-light btn-icon btn-sm">
              <i class="icon-fa icon-fa-mail-reply"/>
            </button>
          </div>
        </div>
        <div class="message-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae quia esse inventore animi eligendi optio temporibus veniam asperiores.
        </div>
      </div>
      <div class="commnet">
        <textarea
          id="reply"
          name="comment"
          cols="75"
          rows="4"
        />
        <button class="btn btn-primary">
          Reply
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
      if (this.isVisible) {
        this.$emit('close')
      }
    }
  }
}
</script>
