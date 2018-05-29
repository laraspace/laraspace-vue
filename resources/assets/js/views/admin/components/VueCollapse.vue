<template>
  <div class="main-content vue-tabs-demo">
    <div class="page-header">
      <h3 class="page-title">Vue Collapse</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Components</a></li>
        <li class="breadcrumb-item active">Vue Collapse</li>
      </ol>
    </div>
    <div class="row">
      <div class="col-lg-6 mt-2">
        <h5 class="section-semi-title">Default</h5>
        <div class="panel-group">
          <v-collapse>
            <div class="panel panel-default">
              <v-collapse-item>
                <a
                  slot="item-title"
                  class="panel-title"
                  href="#collapseOne"
                >
                  Collapsible Group Item #1
                </a>

                <div id="collapseOne" class="panel-collapse panel-content" >
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                  3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                  laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                  coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                  anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                  occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard
                  of them accusamus labore sustainable VHS.
                </div>
              </v-collapse-item>
            </div>
            <div class="panel panel-default">
              <v-collapse-item>
                <a
                  slot="item-title"
                  class="panel-title"
                  href="#collapseTwo"
                >
                  Collapsible Group Item #2
                </a>

                <div id="collapseTwo" class="panel-collapse" >
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                  3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                  laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                  coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                  anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                  occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard
                  of them accusamus labore sustainable VHS.
                </div>
              </v-collapse-item>
            </div>
            <div class="panel panel-default">
              <v-collapse-item>
                <a
                  slot="item-title"
                  class="panel-title"
                  href="#collapseThree"
                >
                  Collapsible Group Item #3
                </a>

                <div id="collapseThree" class="panel-collapse panel-content" >
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                  3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                  laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                  coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                  anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                  occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard
                  of them accusamus labore sustainable VHS.
                </div>
              </v-collapse-item>
            </div>
          </v-collapse>
        </div>
      </div>
      <div class="col-lg-6 mt-2">
        <h5 class="section-semi-title">Accordion</h5>
        <div class="panel-group">
          <v-collapse accordion>
            <div class="panel panel-default">
              <v-collapse-item>
                <a
                  slot="item-title"
                  class="panel-title"
                  href="#collapseOne"
                >
                  Collapsible Group Item #1
                </a>

                <div id="collapseOne" class="panel-collapse panel-content" >
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                  3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                  laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                  coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                  anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                  occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard
                  of them accusamus labore sustainable VHS.
                </div>
              </v-collapse-item>
            </div>
            <div class="panel panel-default">
              <v-collapse-item>
                <a
                  slot="item-title"
                  class="panel-title"
                  href="#collapseTwo"
                >
                  Collapsible Group Item #2
                </a>

                <div id="collapseTwo" class="panel-collapse panel-content" >
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                  3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                  laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                  coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                  anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                  occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard
                  of them accusamus labore sustainable VHS.
                </div>
              </v-collapse-item>
            </div>
            <div class="panel panel-default">
              <v-collapse-item>
                <a
                  slot="item-title"
                  class="panel-title"
                  href="#collapseThree"
                >
                  Collapsible Group Item #3
                </a>

                <div id="collapseThree" class="panel-collapse panel-content" >
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                  3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                  laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                  coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                  anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                  occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard
                  of them accusamus labore sustainable VHS.
                </div>
              </v-collapse-item>
            </div>
          </v-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

