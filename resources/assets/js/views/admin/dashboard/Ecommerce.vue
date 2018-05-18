<template>
  <div
    id="dashboardPage"
    class="main-content">
    <div class="row">
      <div class="col-md-12 col-lg-6 col-xl-3">
        <a class="dashbox dashbox-line-progress" href="#">
          <i class="icon-fa icon-fa-tags text-primary"/>
          <span class="desc">
            Categories
          </span>
          <span class="title text-primary">
            35
          </span>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 25%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </a>
      </div>
      <div class="col-md-12 col-lg-6 col-xl-3">
        <a class="dashbox dashbox-line-progress" href="#">
          <i class="icon-fa icon-fa-star text-success"/>
          <span class="desc">
            Products
          </span>
          <span class="title text-success">
            2000
          </span>
          <div class="progress">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              style="width: 50%"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </a>
      </div>
      <div class="col-md-12 col-lg-6 col-xl-3">
        <a class="dashbox dashbox-line-progress" href="#">
          <i class="icon-fa icon-fa-shopping-cart text-danger"/>
          <span class="desc">
            New Orders
          </span>
          <span class="title text-danger">
            100
          </span>
          <div class="progress">
            <div
              class="progress-bar bg-danger"
              role="progressbar"
              style="width: 70%"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </a>
      </div>
      <div class="col-md-12 col-lg-6 col-xl-3">
        <a class="dashbox dashbox-line-progress" href="#">
          <i class="icon-fa icon-fa-comments text-info"/>
          <span class="desc">
            Reviews
          </span>
          <span class="title text-info">
            59
          </span>
          <div class="progress">
            <div
              class="progress-bar bg-info"
              role="progressbar"
              style="width: 80%"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 mt-2">
        <div class="card">
          <div class="card-header">
            <h6><i class="icon-fa icon-fa-line-chart text-primary"/> Monthly Sales</h6>
          </div>
          <div class="card-body">
            <line-graph :labels="['Jan','Feb','Mar','June']" :values="[20,30,40,60]"/>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 col-xl-6 mt-2">
        <div class="card">
          <div class="card-header">
            <h6><i class="icon-fa icon-fa-shopping-cart text-danger"/> Pending Orders</h6>
          </div>
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Walter White</td>
                  <td>05/12/2016</td>
                  <td>555$</td>
                  <td><a href="#" class="btn btn-default btn-xs">View</a></td>
                </tr>
                <tr>
                  <td>Hank Hill</td>
                  <td>05/12/2016</td>
                  <td>222$</td>
                  <td><a href="#" class="btn btn-default btn-xs">View</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-lg-12 col-xl-6 mt-2">
        <div class="card">
          <div class="card-header">
            <h6><i class="icon-fa icon-fa-users text-info"/> New Customers</h6>
          </div>
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Walter White</td>
                  <td>05/12/2016</td>
                  <td>555$</td>
                  <td><a href="#" class="btn btn-default btn-xs">View</a></td>
                </tr>
                <tr>
                  <td>Hank Hill</td>
                  <td>05/12/2016</td>
                  <td>222$</td>
                  <td><a href="#" class="btn btn-default btn-xs">View</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import LineGraph from '../../../components/chartjs/LineChart.vue'
import BarGraph from '../../../components/chartjs/BarChart.vue'
import PieGraph from '../../../components/chartjs/PieChart.vue'

export default {
  components: {
    LineGraph,
    BarGraph,
    PieGraph
  },
  data () {
    return {
      header: 'header'
    }
  }
}
</script>
