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
        <h6>Tabs Component</h6>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="default col-lg-6 mb-4">
            <tabs>
              <tab name="First tab">
                <h5 class="page-subtitle">First tab</h5>
                This is the content of the first tab
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab name="Second tab">
                <h5 class="page-subtitle">Second tab</h5>
                This is the content of the second tab
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab
                name="Disabled tab"
                :is-disabled="true">
                <h5 class="page-subtitle">Disabled tab</h5>
                This content will be unavailable while :is-disabled prop set to true
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab
                id="oh-hi-mark"
                name="Custom fragment">
                <h5 class="page-subtitle">Custom Fragment</h5>
                The fragment that is appended to the url can be customized
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab
                prefix="<span class='prefix'>→</span> "
                name="Prefix and suffix"
                suffix=" <span class='suffix'>4</span>">
                <h5 class="page-subtitle">Prefix and Suffix</h5>
                A prefix and a suffix can be added
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </tab>
            </tabs>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Tabs Defaults</h6>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="basic col-lg-6 mb-4">
            <h5 class="section-semi-title">Basic</h5>
            <tabs>
              <tab
                name="Home"
                id="basic-home">
                This is the content of the first tab
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab
                name="Profile"
                id="basic-profile">
                This is the content of the second tab
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab
                id="basic-message"
                name="Message">
                The fragment that is appended to the url can be customized
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab
                name="Setting"
                id="basic-setting">
                A prefix and a suffix can be added
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </tab>
            </tabs>
          </div>
          <div class="basic-primary col-lg-6 mb-4">
            <h5 class="section-semi-title">basic primary color</h5>
            <tabs>
              <tab
                name="Home"
                id="basic-primary-home">
                This is the content of the first tab
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab
                name="Profile"
                id="basic-primary-profile">
                This is the content of the second tab
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </tab>
              <tab
                id="basic-primary-message"
                name="Message">
                The fragment that is appended to the url can be customized
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab
                name="Setting"
                id="basic-primary-setting">
                A prefix and a suffix can be added
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </tab>
            </tabs>
          </div>
        </div>
        <div class="row">
          <div class="basic-vertical col-lg-6 mb-4">
            <h5 class="section-semi-title">VERTICAL</h5>
            <tabs>
              <tab
                name="Home"
                id="basic-vertical-home">
                This is the content of the first tab
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab
                name="Profile"
                id="basic-vertical-profile">
                This is the content of the second tab
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab
                id="basic-vertical-message"
                name="Message">
                The fragment that is appended to the url can be customized
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab
                id="basic-vertical-setting"
                name="Setting">
                A prefix and a suffix can be added
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </tab>
            </tabs>
          </div>
          <div class="basic-vertical-primary col-lg-6 mb-4">
            <h5 class="section-semi-title">vertical primary color</h5>
            <tabs>
              <tab
                id="vertical-primary-home"
                name="Home">
                This is the content of the first tab
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab
                id="vertical-primary-Profile"
                name="Profile">
                This is the content of the second tab
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab
                id="vertical-primary-message"
                name="Message">
                The fragment that is appended to the url can be customized
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab
                id="vertical-primary-setting"
                name="Fourth">
                A prefix and a suffix can be added
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </tab>
            </tabs>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Tabs Simple</h6>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="simple col-lg-6 mb-4">
            <h5 class="section-semi-title">BASIC</h5>
            <tabs>
              <tab
                id="simple-home"
                name="Home">
                This is the content of the first tab
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab
                id="simple-profile"
                name="Profile">
                This is the content of the second tab
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui hic corporis aspernatur non.
                </p>
              </tab>
              <tab
                id="simple-message"
                name="Message">
                The fragment that is appended to the url can be customized
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab
                id="simple-setting"
                name="Setting">
                A prefix and a suffix can be added
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </tab>
            </tabs>
          </div>
          <div class="vertical col-lg-6 mb-4">
            <h5 class="section-semi-title">VERTICAL</h5>
            <tabs>
              <tab name="Home">
                This is the content of the first tab
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab name="Profile">
                This is the content of the second tab
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab
                id="hello-mark"
                name="Message">
                The fragment that is appended to the url can be customized
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab name="Setting">
                A prefix and a suffix can be added
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
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
export default {
  components: {
    'tabs': Tabs,
    'tab': Tab
  }
}
</script>
