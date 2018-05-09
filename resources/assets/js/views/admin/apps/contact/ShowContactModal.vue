<template>
  <div :class="['contact-side-panel', {'pull-left-side':sideBox}]" >
    <header>
        <div class="user-profile">
            <a href="#" class="user-img">
                <img v-if="contact.images" :src="contact.image" alt="">
                <i class="icon-fa icon-fa-user" v-else></i>
            </a>
            <h6>{{ contact.name }}</h6>
        </div>
        <div class="sidePanel-action">
            <a href="#">
                <i class="icon-fa icon-fa-folder"></i>
            </a>
            <a href="#">
                <i class="icon-fa icon-fa-trash"></i>
            </a>
            <a href="#" class="close-side-panel" @click="sideBox = false">
                <i class="icon-fa icon-fa-remove"></i>
            </a>
        </div>
        <div class="edit" @click="editContact">
            <button class="btn btn-success edit-btn">
                <i :class="['icon-im', {'icon-im-pencil':iconPencil, 'icon-im-cross':iconClose}]"></i>
            </button>
        </div>
    </header>
    <div class="contact-detail">
        <form  @submit.prevent="updateContact">
            <div class="form-group row">
                <label for="name" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                    <input
                    type="text"
                    class="form-control"
                    v-if="showInput"
                    v-model="contact.name"
                    >
                    <label class="col-form-label" v-if="viewContact">{{ contact.name }}</label>
                </div>
            </div>
            <div class="form-group row">
                <label for="email" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input
                    name="email"
                    type="text"
                    class="form-control"
                    v-if="showInput"
                    v-model="contact.email"
                    >
                    <label class="col-form-label" v-if="viewContact">{{ contact.email }}</label>
                </div>
            </div>
            <div class="form-group row">
                <label for="phone" class="col-sm-2 col-form-label">Phone</label>
                <div class="col-sm-10">
                    <input
                        name="phone"
                        type="text"
                        class="form-control"
                        v-model="contact.phone"
                        id="phone" 
                        v-if="showInput">
                    <label class="col-form-label" v-if="viewContact">{{ contact.phone }}</label>
                </div>
            </div>
            <div class="form-group row">
                <label for="birthday" class="col-sm-2 col-form-label">Birthday</label>
                <div class="col-sm-10">
                    <input type="date" name="dob" class="form-control ls-datepicker" id="birthday" 
                        v-model="contact.dob" v-if="showInput" >
                    <label class="col-form-label" v-if="viewContact">{{ contact.dob }}</label>
                </div>
            </div>
            <div class="form-group row">
                <label for="relation" class="col-sm-2 col-form-label">Relation</label>
                <div class="col-sm-10">
                    <multiselect
                      track-by="id"
                      label="name"
                      v-if="showInput"
                      v-model="contact.labels"
                      :options="labels"
                      :multiple="true"/>
                    <label class="col-form-label" v-if="viewContact" v-for="label in contact.labels">{{ label.name }}</label>
                </div>
            </div>
            <div class="form-group row">
                <label for="address" class="col-sm-2 col-form-label">Address</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="contact.address" id="address" 
                        v-if="showInput">
                    <label class="col-form-label" v-if="viewContact">{{ contact.address }}</label>
                </div>
            </div>
            <div class="form-group row">
                <label for="url" class="col-sm-2 col-form-label">URL</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="contact.url" id="url" 
                    v-if="showInput">
                    <label class="col-form-label" v-if="viewContact">{{ contact.url }}</label>
                </div>
            </div>
            <div class="form-group">
                <button type="submit" class="col-sm-2 btn btn-theme"  v-if="showInput">
                    Update 
                </button>
            </div>
        </form>
    </div>
  </div>
</template>
<script>
import Multiselect from 'vue-multiselect'
export default {
  components:{
    Multiselect
  },

  data() {
    return{
      contact:{
        id:'',
        img:'',
        name: '',
        phone: '',
        email: '',
        address:'',
        dob:'',
        labels:'',
        url:'',
      },
      contactData:[],
      showInput: false,
      iconPencil: true,
      iconClose: false,
      viewContact: true,
      sideBox:false,
      labels: [],
      selectedLabels:[],
      labelData: []
    }
  },
  mounted(){
    
 
  },
   watch:{
    contactData(value) {
      this.contact = value
      console.log(value)
    }
  },
  methods:{
    editContact () {
      this.iconPencil = !this.iconPencil
      this.iconClose = !this.iconClose
      this.showInput = !this.showInput
      this.viewContact = !this.viewContact
    },
    updateContact() {
        let self = this
        axios.put('/api/admin/apps/contacts/list/'+ this.contact.id,this.contact)
        .then(function (response) {
          self.sideBox=false
          self.editContact()
          self.$parent.getContacts()
          })
        // self.contacts = response.data
    },
    isSelectLabels (label) {
      // console.log(this.selectedContact.labels)
      return this.contactData.labels.indexOf(label) === -1 ? false : true
    },

  }
    
  
}
</script>
