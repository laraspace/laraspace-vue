<template>
  <div :class="{'collapsed': message.collapsed}" class="message" @click="openCollapsedMessage">
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
          <div class="name">{{ message.name }}</div>
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
        <span class="time">{{ message.time }}</span>
        <button class="btn btn-light btn-icon btn-sm">
          <i class="icon-fa icon-fa-star-o"/>
        </button>
        <button class="btn btn-light btn-icon btn-sm">
          <i class="icon-fa icon-fa-mail-reply"/>
        </button>
      </div>
    </div>
    <div v-show="!message.collapsed" class="message-content" >
      <div class="message-description">
        {{ message.description }}
      </div>
      <div class="message-attachment">
        <p>
          <i class="icon-fa icon-fa-paperclip"/>
          Attachments |
          <a href="#">Download All</a>
        </p>
        <ul>
          <li v-for="attachment in message.attachments" :key="attachment.name">
            <span class="name">{{ attachment.name }}</span>
            <span class="size">({{ attachment.size }})</span>
            <button class="btn btn-light btn-icon btn-sm">
              <i class="icon-fa icon-fa-cloud-download"/>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div v-show="message.collapsed" class="message-excerpt">
      {{ message.excerpt }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  methods: {
    openCollapsedMessage () {
      if (this.message.collapsed) {
        this.$emit('open', this.message.id)
      }
    }
  }
}
</script>
