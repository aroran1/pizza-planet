<template>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <table class="table table-hover">
        <thead class="thead-default">
          <tr>
            <th>Size</th>
            <th>Price</th>
            <th>Add to basket</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Margherita</strong></td>
          </tr>
          <tr>
            <td>9"</td>
            <td>12.95</td>
            <td>
              <button class="btn btn-sm btn-outline-success" type="button ">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getMenuItems: {
        1: {
          name: "Margherita",
          description: "",
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
        }
      }
    }
  }
}
</script>