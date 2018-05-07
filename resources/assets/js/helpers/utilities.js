export default {

  addClass (el, className) {
    if (el.classList) el.classList.add(className)
    else el.className += ' ' + className
  },

  hasClass (el, className) {
    const hasClass = el.classList
      ? el.classList.contains(className)
      : new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className)

    return hasClass
  },

  reset (prefix) {
    var regx = new RegExp('\\b' + prefix + '(.*)?\\b', 'g')
    document.body.className = document.body.className.replace(regx, '')
  },

  setLayout (layoutName) {
    this.reset('layout-')
    document.body.classList.add('layout-' + layoutName)
  },

  setSkin (skinName) {
    this.reset('skin-')
    document.body.classList.add('skin-' + skinName)
  }
}
