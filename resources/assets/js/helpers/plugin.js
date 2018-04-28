export default {
  // EasyPieChart () {
  //   var elems = $('.easy-pie-chart')
  //   elems.each(function (index, element) {
  //     var color = $(this).data('color') ? $(this).data('color') : '#ffde00'

  //     let myBarChart = new EasyPieChart(element, {
  //       scaleColor: false,
  //       barColor: color,
  //       trackColor: '#f8f8f8',
  //       size: 80,
  //       onStep: function (from, to, percent) {
  //         $(this.el).find('.percent').text(Math.round(percent))
  //       }
  //     })
  //   })
  // },

  Editors () {
    document.getElementsByClassName('ls-summernote')[0].summernote()

    var editor = document.getElementsByClassName('ls-simplemde')[0]

    if (editor) {
      var simplemde = new SimpleMDE({ element: editor })
    }
  },
  initPlugins (plugins) {
    plugins.forEach((plugin) => {
      if (this.isFunction(this[plugin])) {
        this[plugin]()
      }
    })
  },

  isFunction (functionToCheck) {
    var getType = {}
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]'
  },
}
