export default {

  toggleSidebar(){
    var icon = $('.hamburger').first();
    $('body').toggleClass('sidebar-open');
      icon.toggleClass('is-active');
  },
  close($e) {
    $($e.target).parentsUntil('.card').parent().hide();
    // $($e.target).hide('.card');
  },
  toggleUpDown($e){
    $($e.target).toggleClass('icon-fa-angle-down');
    },

  reset(){
    document.body.classList.remove();
  },
  set(layoutName){
   
    document.body.classList.add(layoutName)
    this.reset()
  }
}