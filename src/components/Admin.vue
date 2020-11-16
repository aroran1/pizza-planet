<template>
<div>
  <section>
    <div class="row">
      <div class="col-sm-12">
        <pp-login></pp-login>
      </div>
    </div>
  </section>
  <section v-if="getCurrentUser">
    <div class="row">
      <div class="col-sm-12">
        <h1>Admin</h1>
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
          <tbody v-for="item in getMenuItems" :key="item['.key']">
            <tr>
              <td>{{ item.name }}</td>
              <td>
                <button
                  class="btn btn-sm btn-outline-danger"
                  @click="removeMenuItem(item['.key'])"
                >x</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div> 
    </div>
    <div class="row">
      <div class="col-sm-12">
        <h2>Current Orders: {{ getNumberOfOrders }}</h2>
        <table class="table table-sm" v-for="(orders, index) in getOrders" :key="orders['.key']">
          <thead class="thead-default thead-light"> 
            <tr>
              <th>Item</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <div class="order-number">
              <strong><em>Order Number: {{ index+1 }}</em></strong>
              <button
                class="btn btn-sm btn-outline-danger"
                @click="removeOrderItem(orders['.key'])"
              >x</button>
            </div>
            <tr v-for="orderItems in orders" :key="orderItems.name">
              <td>{{ orderItems.name }}</td>
              <td>{{ orderItems.size }}</td>
              <td>{{ orderItems.quantity }}</td>
              <td>{{ orderItems.price | currency}}</td>
            </tr>
          </tbody>
        </table>
      </div> 
    </div>
  </section>
</div>
</template>

<script>
import NewPizza from "./NewPizza.vue";
import Login from "./Login.vue";
import { mapGetters } from 'vuex';
import { dbMenuRef, dbOrdersRef } from '../database/firebaseConfig';

export default {
  components: {
    ppNewPizza: NewPizza,
    ppLogin: Login
  },
  computed: {
    ...mapGetters([
      'getMenuItems',
      'getNumberOfOrders',
      'getOrders',
      'getCurrentUser'
    ])
    // using mapGetters helpers are better way of using getters
    // menuItems() {
    //   // return this.$store.state.menuItems 
    //   // return this.$store.getters.getMenuItems // setting up getter is a better way
    // },
    // numberOfOrders() {
    //   return this.$store.getters.getNumberOfOrders
    // }
  },
  methods: {
    removeMenuItem(key) {
      dbMenuRef.child(key).remove();
    },
    removeOrderItem(key) {
      dbOrdersRef.child(key).remove();
    }
  },
  beforeRouteLeave(to, from, next) {
    if(confirm("Have you remembered to logout?") === true) {
      next()
    } else {
      next(false)
    }
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
.order-number {
  background: #f5f7fa;
}
.btn-outline-danger {
  margin: 10px;
}
</style>