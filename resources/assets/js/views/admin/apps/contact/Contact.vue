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
    <add-contact-modal ref="contact"/>
</div>

</template>

<script>
import ContactList from './ContactList'
import AddContactModal from './AddContactModal'

export default {
components:{
    ContactList,AddContactModal
    },
methods: {
      openAddContactModal(){
        this.$refs.contact.openModal()
      }
  }
}
</script>