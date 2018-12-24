<template>
  <div class="mailbox-modal">
    <div class="mail-header">
      <div class="mail-actions">
        <ul class="mail-action-list">
          <li class="action" @click="closeModal">
            <a v-tooltip.top-center="'Go Back'" href="#">
              <i class="icon-fa icon-fa-arrow-left"/>
            </a>
          </li>
          <li class="action">
            <a v-tooltip.top-center="'Report'" href="#">
              <i class="icon-fa icon-fa-exclamation"/>
            </a>
          </li>
          <li class="action">
            <a v-tooltip.top-center="'Trash'" href="#">
              <i class="icon-fa icon-fa-trash"/>
            </a>
          </li>
          <li class="action">
            <a v-tooltip.top-center="'Forward'" href="#">
              <i class="icon-fa icon-fa-envelope-open icon-fa-fw"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="mail-body">
      <h3 class="mail-subject">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>

      <message v-for="message in messages" :message="message" :key="message.id" @open="changeCollapse"/>

      <div class="message-reply form-group-row">
        <textarea
          id="reply"
          name="comment"
          class="form-control"
          cols="75"
          rows="4"
        />
        <button class="btn btn-primary mt-2">
          Reply
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Message from './Message'

export default {
  components: {
    Message
  },
  props: {
    isVisible: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data () {
    return {
      messages: [
        {
          id: 1,
          avatar: '/assets/img/avatars/avatar.png',
          name: 'John Deo',
          email: 'johndeo@gmail.com',
          time: '3 minutes ago',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae quia esse inventore animi eligendi optio temporibus veniam asperiores? Dolorem non quos error, aut est libero nisi veniam provident ratione.',
          excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          attachments: [
            {name: 'abc.mp4', size: '2.50mb'},
            {name: 'image.jpeg', size: '1.50mb'}
          ],
          collapsed: false
        },
        {
          id: 2,
          avatar: '/assets/img/avatars/avatar.png',
          name: 'John Deo',
          email: 'johndeo@gmail.com',
          time: '3 minutes ago',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae quia esse inventore animi eligendi optio temporibus veniam asperiores? Dolorem non quos error, aut est libero nisi veniam provident ratione.',
          excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          attachments: [
            {name: 'abc.mp4', size: '2.50mb'},
            {name: 'image.jpeg', size: '1.50mb'}
          ],
          collapsed: true
        },
        {
          id: 3,
          avatar: '/assets/img/avatars/avatar.png',
          name: 'John Deo',
          email: 'johndeo@gmail.com',
          time: '3 minutes ago',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae quia esse inventore animi eligendi optio temporibus veniam asperiores? Dolorem non quos error, aut est libero nisi veniam provident ratione.',
          excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          attachments: [
            {name: 'abc.mp4', size: '2.50mb'},
            {name: 'image.jpeg', size: '1.50mb'}
          ],
          collapsed: true
        }
      ]
    }
  },

  methods: {
    closeModal () {
      if (this.isVisible) {
        this.$emit('close')
      }
    },
    changeCollapse (messageId) {
      this.messages.map((message) => {
        if (message.id === messageId) {
          message.collapsed = false
        } else {
          message.collapsed = true
        }
      })
    }
  }
}
</script>
