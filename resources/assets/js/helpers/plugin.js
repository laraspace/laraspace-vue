export default {
  // EasyPieChart () {
  //   let elems = $('.easy-pie-chart')
  //   elems.each(function (index, element) {
  //     let color = $(this).data('color') ? $(this).data('color') : '#ffde00'

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
    // let editor1 =  document.getElementsByClassName('ls-summernote')[]
    // if (editor1) {
    //   let summernote = editor1.summernote()
    // }
    let editor2 = document.getElementsByClassName('ls-simplemde')[0]

    if (editor2) {
      let simplemde = new SimpleMDE({ element: editor2 })
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
    let getType = {}
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]'
  }
}
