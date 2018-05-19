<template>
  <div class="main-content contact-page">
    <div class="page-header">
      <h3 class="page-title">Contacts App</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="">Home</a></li>
        <li class="breadcrumb-item"><a href="">Apps</a></li>
        <li class="breadcrumb-item active">Contacts App</li>
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
