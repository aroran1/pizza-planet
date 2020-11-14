<template>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <h1>Menu</h1>
      <table class="table table-hover">
        <thead class="thead-default thead-light">
          <tr>
            <th>Size</th>
            <th>Price</th>
            <th>Add to basket</th>
          </tr>
        </thead>
        <!-- <tbody v-bind:for="item in getMenuItems"> -->
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td><strong>{{ item.name }}</strong></td>
          </tr>
          <!-- <tr v-bind:for="option in item.options"> -->
          <tr v-for="option in item.options" :key="option.size">
            <td>{{ option.size }}</td>
            <td>{{ option.price }}</td>
            <td>
              <button
                class="btn btn-sm btn-outline-success"
                type="button"
                @click="addToBasket(item, option)"
              >+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!-- Shopping basket -->
    <div class="col-sm-12 col-md-6">
      <h1>Basket</h1>
      <div v-if="basket.length > 0">
        <table class="table">
          <thead class="thead-default thead-light">
            <tr>
              <th>Quantity</th>
              <th>Item</th>
              <th>Total</th>
            </tr>
          </thead>
          <!-- <tbody v-bind:for="item in getMenuItems"> -->
          <tbody v-for="item in basket" :key="item.name">
            <tr>
              <td>
                <button
                  class="btn btn-light btn-sm"
                  type="button"
                  @click="decreaseQuantity(item)"
                >-</button>
                <span class="quantity">{{ item.quantity }}</span>
                <button
                  class="btn btn-light btn-sm"
                  type="button"
                  @click="increaseQuantity(item)"
                >+</button>
              </td>
              <td>{{ item.name }} {{ item.size }}"</td>
              <td>{{ item.price * item.quantity}}</td>
            </tr>
          </tbody>
        </table>
        <p>Order Total: </p>
        <button class="btn btn-success btn-block" type="button">Place Order</button>
      </div>
      <div v-else>
        <p>{{ basketEmptyText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      basket: [],
      basketEmptyText: 'Your basket is empty!',
      getMenuItems: {
        1: {
          'name': "Margherita",
          description: "A delicious tomato based pizza with mozerella topping",
          options: [
            {
              size: '9',
              price: 6.95
            },
            {
              size: '12',
              price: 10.95
            }
          ]
        },
        2: {
          'name': "Pepproni",
          description: "A delicious tomato based pizza with mozerella and pepproni topping",
          options: [
            {
              size: '9',
              price: 8.95
            },
            {
              size: '12',
              price: 12.95
            }
          ]
        },
        3: {
          'name': "Chicken Supreme",
          description: "A delicious tomato based pizza with mozerella and pepproni topping",
          options: [
            {
              size: '9',
              price: 9.95
            },
            {
              size: '12',
              price: 13.95
            }
          ]
        },
        4 : {
          'name': "BBQ",
          description: "A delicious tomato based pizza with mozerella and pepproni topping",
          options: [
            {
              size: '9',
              price: 8.95
            }
          ]
        }
      }
    }
  },
  methods: {
    addToBasket(item, option) {
      this.basket.push({
        name: item.name,
        price: option.price,
        size: option.size,
        quantity: 1
      })
    },
    removeFromBasket(item) {
      const itemIndex = this.basket.indexOf(item);
      this.basket.splice(itemIndex, 1)
    },
    decreaseQuantity(item) {
      item.quantity--;
      if (item.quantity === 0) {
        this.removeFromBasket(item );
      }
    },
    increaseQuantity(item) {
      item.quantity++;
    }
  }
}
</script>

<style>
h1 {
  font-size: 1.5em;
}
.quantity {
  padding: 10px;
}
</style>