export default {

    toggleSidebar(){
        var icon = $('.hamburger').first();
        $('body').toggleClass('sidebar-open');
        icon.toggleClass('is-active');
    }
}