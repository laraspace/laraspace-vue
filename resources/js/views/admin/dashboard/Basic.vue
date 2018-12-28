<template>
  <div
    id="dashboardPage"
    class="main-content">
    <div class="row">
      <div class="col-md-12 col-lg-6 col-xl-3">
        <a class="dashbox" href="#">
          <i class="icon-fa icon-fa-envelope text-primary"/>
          <span class="title">
            35
          </span>
          <span class="desc">
            Mails
          </span>
        </a>
      </div>
      <div class="col-md-12 col-lg-6 col-xl-3">
        <a class="dashbox" href="#">
          <i class="icon-fa icon-fa-ticket text-success"/>
          <span class="title">
            200
          </span>
          <span class="desc">
            Pending Tickets
          </span>
        </a>
      </div>
      <div class="col-md-12 col-lg-6 col-xl-3">
        <a class="dashbox" href="#">
          <i class="icon-fa icon-fa-shopping-cart text-danger"/>
          <span class="title">
            100
          </span>
          <span class="desc">
            New Orders
          </span>
        </a>
      </div>
      <div class="col-md-12 col-lg-6 col-xl-3">
        <a class="dashbox" href="#">
          <i class="icon-fa icon-fa-comments text-info"/>
          <span class="title">
            59
          </span>
          <span class="desc">
            Comments
          </span>
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 col-xl-6 mt-2">
        <div class="card">
          <div class="card-header">
            <h6><i class="icon-fa icon-fa-line-chart text-warning"/>Traffic Stats</h6>
          </div>
          <div class="card-body">
            <line-graph :labels="['Jan','Feb','Mar','June']" :values="[20,30,40,60]"/>
          </div>
        </div>
      </div>
      <div class="col-lg-12 col-xl-6 mt-2">
        <div class="card">
          <div class="card-header">
            <h6><i class="icon-fa icon-fa-bar-chart text-success"/>Sales Chart</h6>
          </div>
          <div class="card-body">
            <bar-graph :labels="['Jan','Feb','Mar','June']" :values="[20,30,40,60]"/>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 col-xl-6 mt-2">
        <div class="card">
          <div class="card-header">
            <h6><i class="icon-fa icon-fa-shopping-cart text-danger"/>Recent Orders</h6>
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
            <h6><i class="icon-fa icon-fa-users text-info"/>New Customers</h6>
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
      'header': 'header'
    }
  }
}
</script>
