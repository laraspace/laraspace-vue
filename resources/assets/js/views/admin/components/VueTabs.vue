<template>
  <div class="main-content vue-tabs-demo">
    <div class="page-header">
      <h3 class="page-title">Vue Tabs</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Components</a></li>
        <li class="breadcrumb-item active">Vue Tabs</li>
      </ol>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Tabs Default</h6>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-xl-6 mb-4">
            <h5 class="section-semi-title">Basic</h5>
            <tabs class="tabs-default">
              <tab id="basic-home" name="Home">
                This is the content of the first tab
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab id="basic-profile" name="Profile">
                This is the content of the second tab
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab id="basic-message" name="Message">
                The fragment that is appended to the url can be customized
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab id="basic-setting" name="Setting">
                A prefix and a suffix can be added
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </tab>
            </tabs>
          </div>

          <div class="col-xl-6 mb-4">
            <h5 class="section-semi-title">basic primary color</h5>
            <tabs class="tabs-default primary">
              <tab id="basic-primary-home" name="Home">
                This is the content of the first tab
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab id="basic-primary-profile" name="Profile">
                This is the content of the second tab
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </tab>
              <tab id="basic-primary-message" name="Message">
                The fragment that is appended to the url can be customized
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab id="basic-primary-setting" name="Setting">
                A prefix and a suffix can be added
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </tab>
            </tabs>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 mb-4">
            <h5 class="section-semi-title">VERTICAL</h5>
            <tabs class="tabs-vertical">
              <tab id="basic-vertical-home" name="Home">
                This is the content of the first tab
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab id="basic-vertical-profile" name="Profile">
                This is the content of the second tab
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab id="basic-vertical-message" name="Message">
                The fragment that is appended to the url can be customized
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab id="basic-vertical-setting" name="Setting">
                A prefix and a suffix can be added
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </tab>
            </tabs>
          </div>
          <div class="col-lg-6 mb-4">
            <h5 class="section-semi-title">vertical primary color</h5>
            <tabs class="tabs-vertical primary">
              <tab id="vertical-primary-home" name="Home">
                This is the content of the first tab
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab id="vertical-primary-Profile" name="Profile">
                This is the content of the second tab
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab id="vertical-primary-message" name="Message">
                The fragment that is appended to the url can be customized
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab id="vertical-primary-setting" name="Fourth">
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
          <div class="col-xl-6 mb-4">
            <h5 class="section-semi-title">BASIC</h5>
            <tabs class="tabs-simple">
              <tab id="simple-home" name="Home">
                This is the content of the first tab
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab id="simple-profile" name="Profile">
                This is the content of the second tab
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui hic corporis aspernatur non.
                </p>
              </tab>
              <tab id="simple-message" name="Message">
                The fragment that is appended to the url can be customized
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </tab>
              <tab id="simple-setting" name="Setting">
                A prefix and a suffix can be added
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </tab>
            </tabs>
          </div>
          <div class="col-xl-6 mb-4">
            <h5 class="section-semi-title">VERTICAL</h5>
            <tabs class="tabs-simple-vertical">
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
              <tab id="hello-mark" name="Message">
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
import { Tabs, Tab } from 'vue-tabs-component'

export default {
  components: {
    'tabs': Tabs,
    'tab': Tab
  }
}
</script>
