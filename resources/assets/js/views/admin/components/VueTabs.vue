<template>
  <div class="main-content vue-tabs-demo">
    <div class="page-header">
      <h3 class="page-title">Vue Tabs</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Components</a></li>
        <li class="breadcrumb-item active">Vue-Tabs</li>
      </ol>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Vue Tabs <a
          class="source-link"
          href="http://vue-tabs-component.spatie.be/"
          target="_blank">source</a></h6>
      </div>
      <div class="card-body">
        <div class="col-lg-6 mb-4">
          <div>
            <tabs>
              <tab name="First tab">
                <h2 class="page-subtitle">First tab</h2>
                This is the content of the first tab
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio quibusdam maxime amet tenetur quasi nobis maiores dolores voluptates, soluta quae alias ratione iure. Consequuntur asperiores at placeat officia tempora quidem.
                </p>
              </tab>
              <tab name="Second tab">
                <h2 class="page-subtitle">Second tab</h2>
                This is the content of the second tab
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui hic corporis aspernatur non, odit sed libero harum quos nemo eaque adipisci nihil placeat ipsum, esse suscipit doloribus cum? Nihil, pariatur.
                </p>
              </tab>
              <tab
                name="Disabled tab"
                :is-disabled="true">
                <h2 class="page-subtitle">Disabled tab</h2>
                This content will be unavailable while :is-disabled prop set to true
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti placeat eius tempore facere, ipsum nulla molestias dolorum deserunt quasi maxime perspiciatis impedit itaque libero a sed eveniet nostrum quidem vel!
                </p>
              </tab>
              <tab
                id="oh-hi-mark"
                name="Custom fragment">
                <h2 class="page-subtitle">Custom Fragment</h2>
                The fragment that is appended to the url can be customized
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque officia esse necessitatibus quo temporibus fugiat placeat qui voluptas? Perspiciatis officiis cumque adipisci tempora eligendi est tenetur nam modi aut vero.
                </p>
              </tab>
              <tab
                prefix="<span class='prefix'>→</span> "
                name="Prefix and suffix"
                suffix=" <span class='suffix'>4</span>">
                <h2 class="page-subtitle">Prefix and Suffix</h2>
                A prefix and a suffix can be added
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime in at nihil laborum labore dolore, tempora deserunt est recusandae quis. Ratione sint ducimus animi! Provident architecto mollitia libero nobis nostrum?
                </p>
              </tab>
            </tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {Tabs, Tab} from 'vue-tabs-component'
import 'vue-tabs-component/docs/resources/tabs-component.css'
export default{
  components: {
    'tabs': Tabs,
    'tab': Tab
  }
}
</script>
<style>

.suffix{
  background-color: #c03;
  color: #fff;
  margin-left: .35em;
}
.prefix {
    background-color: #d1e8eb;
    color: #0c5174;
    margin-right: .35em;
}
.prefix , .suffix{
    align-items: center;
    border-radius: 1.25rem;
    display: flex;
    font-size: .75rem;
    flex-shrink: 0;
    height: 1.25rem;
    justify-content: center;
    line-height: 1.25rem;
    min-width: 1.25rem;
    padding: 0 .1em;
}
.page-subtitle {
    font-size: 1.25rem;
    margin-bottom: 1em;
    padding-top: .25em;
}
@media (min-width: 700px){
.suffix {
    position: absolute;
    right: -.725em;
    top: -.725em;
  }
}
</style>
