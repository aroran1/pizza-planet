<template>
<div>
  <div class="row">
    <div class="col-sm-12">
      <h2>Admin</h2>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <!-- Pizza component -->
      <pp-new-pizza></pp-new-pizza>
    </div> 
    <div class="col-sm-12 col-md-6">
      <h2>Remove Pizza from Menu</h2>
      <table class="table table-hover">
        <thead class="thead-default thead-light">
          <tr>
            <th>Item</th>
            <th>Remove Item</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Marghrita</td>
            <td><button class="btn btn-sm btn-outline-danger">x</button></td>
          </tr>
        </tbody>
      </table>
    </div> 
  </div>
  <div class="row">
    <div class="col-sm-12">
      <h2>Current Orders</h2>
      <table class="table table-sm">
        <thead class="thead-default thead-light">
          <tr>
            <th>Order Info</th>
            <th>Item</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="order-number">
                <strong><em>Order Number: 1</em></strong>
                <button
                  class="btn btn-sm btn-outline-danger"
                >x</button>
              </div>
            </td>
            <td>Marghrita</td>
            <td>9"</td>
            <td>1</td>
            <td>9.95</td>
          </tr>
        </tbody>
      </table>
    </div> 
  </div>

  <hr />
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <pp-login></pp-login>
    </div>
  </div>
</div>
</template>

<script>
import NewPizza from "./NewPizza.vue";
import Login from "./Login.vue";

export default {
  components: {
    ppNewPizza: NewPizza,
    ppLogin: Login
  }
}
</script>

<style scoped>
h1 {
  font-size: 1.5em;
}
h2 {
  font-size: 1.2em;
}

</style>