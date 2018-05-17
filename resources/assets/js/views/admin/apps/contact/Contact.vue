<template>
  <div class="main-content contact-page">
    <div class="page-header">
      <h3 class="page-title">Contact List</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="">Home</a></li>
        <li class="breadcrumb-item"><a href="">Components</a></li>
        <li class="breadcrumb-item active">Contacts</li>
      </ol>
    </div>
    <contact-list/>
  </div>
</template>

<script>
import ContactList from './ContactList'

export default {
  components: {
    ContactList
  }
}
</script>
