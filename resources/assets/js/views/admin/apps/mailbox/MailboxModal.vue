<template>
  <div class="mailbox-modal">
    <div class="mail-header">
      <div class="mail-actions">
        <ul class="mail-action-list">
          <li class="action" @click="closeModal">
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
      <message></message>

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
import Message from './Message'

export default {
  components: {
    Message
  },
  data () {
    return {
      messages: [
        {
          avatar: '/assets/img/avatars/avatar.png',
          name: 'John Deo',
          email: 'johndeo@gmail.com',
          time: '3 minutes ago',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae quia esse inventore animi eligendi optio temporibus veniam asperiores? Dolorem non quos error, aut est libero nisi veniam provident ratione.',
          attachments: [
            {name: 'abc.mp4', size: '2.50mb'},
            {name: 'image.jpeg', size: '1.50mb'}
          ]
        },
        {
          avatar: '/assets/img/avatars/avatar.png',
          name: 'John Deo',
          email: 'johndeo@gmail.com',
          time: '3 minutes ago',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae quia esse inventore animi eligendi optio temporibus veniam asperiores? Dolorem non quos error, aut est libero nisi veniam provident ratione.',
          attachments: [
            {name: 'abc.mp4', size: '2.50mb'},
            {name: 'image.jpeg', size: '1.50mb'}
          ]
        },
        {
          avatar: '/assets/img/avatars/avatar.png',
          name: 'John Deo',
          email: 'johndeo@gmail.com',
          time: '3 minutes ago',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae quia esse inventore animi eligendi optio temporibus veniam asperiores? Dolorem non quos error, aut est libero nisi veniam provident ratione.',
          attachments: [
            {name: 'abc.mp4', size: '2.50mb'},
            {name: 'image.jpeg', size: '1.50mb'}
          ]
        }
      ]
    }
  },
  props: {
    isVisible: {
      type: Boolean,
      required: true,
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
