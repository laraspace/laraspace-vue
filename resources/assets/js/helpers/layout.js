export default {

  toggleSidebar(){
    var icon = $('.hamburger').first();
    $('body').toggleClass('sidebar-open');
      icon.toggleClass('is-active');
  },   toggleUpDown($e){
    $($e.target).toggleClass('icon-fa-angle-down');
    },

  reset(){
    let el = (document.body.classList.toString().match(/(^|\s)layout-\S+/g)).join(' ')
    document.body.classList.remove(el);
  },
  set(layoutName){
    this.reset()
    document.body.classList.add(layoutName)
  }
}