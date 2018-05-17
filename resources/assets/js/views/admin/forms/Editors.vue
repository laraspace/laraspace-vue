<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Editors</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Forms</a></li>
        <li class="breadcrumb-item active">Editors</li>
      </ol>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Summernote</h6>
      </div>
      <div class="card-body">
        <div class="ls-summernote">
          Hello Summernote
        </div>
        <summernote
          name="editor"
        />
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Simple MDE</h6>
      </div>
      <div class="card-body">
        <textarea class="ls-simplemde">
          # Intro
          Go ahead, play around with the editor! Be sure to check out **bold** and *italic* styling, or even [links](http://google.com). You can type the Markdown syntax, use the toolbar, or use shortcuts like `cmd-b` or `ctrl-b`.

          ## Lists
          Unordered lists can be started using the toolbar or by typing `* `, `- `, or `+ `. Ordered lists can be started by typing `1. `.

          #### Unordered
          * Lists are a piece of cake
          * They even auto continue as you type
          * A double enter will end them
          * Tabs and shift-tabs work too

          #### Ordered
          1. Numbered lists...
          2. ...work too!

          ## What about images?
          ![Yes](http://i.imgur.com/sZlktY7.png)
        </textarea>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import Plugin from '../../../helpers/plugin'

export default {
  components: {
    'summernote': require('summernote/dist/summernote')
  },
  mounted () {
    Plugin.initPlugins(['Editors'])
    // // var editor1 =  document.getElementsByClassName('ls-summernote')
    // // if (editor1) {
    // //   var summernote = new SummerNote({ element: editor1 })
    // // }
    // var editor2 = document.getElementsByClassName('ls-simplemde')[0]

    // if (editor2) {
    //   var simplemde = new SimpleMDE({ element: editor2 })
    // }
  }
}
</script>
