export default {

  toggleSidebar () {
    let icon = document.getElementsByClassName('hamburger')[0]
    document.body.classList.toggle('sidebar-open')
    icon.classList.toggle('is-active')
  },

  reset () {
    let cls = (document.body.classList.toString().match(/layout-\S+/g) || []).join('')
    if (cls) {
      document.body.classList.remove(cls)
    }
  },

  set (layoutName) {
    this.reset()
    document.body.classList.add(layoutName)
  },

  resetLogin (layoutName) {
    document.body.classList.remove('login-page')
    document.body.classList.remove(layoutName)
  },

  setLogin (layoutName) {
    let body = document.body
    body.className = 'skin-default'
    body.classList.add('login-page')
    body.classList.add(layoutName)
  }
}
