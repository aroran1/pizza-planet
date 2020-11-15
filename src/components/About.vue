<template>
  <div class="row">
    <div class="col-sm-12">
      <h1>About us</h1>
      <nav class="navbar navbar-expand-lg navbar-light">
        <ul class="navbar-nav">
          <router-link to="/contact" tag="li"><a class="nav-link">Contact us</a></router-link>
          <router-link to="/history" tag="li"><a class="nav-link">History</a></router-link>
          <router-link to="/delivery" tag="li"><a class="nav-link">Delivery</a></router-link>
          <router-link to="/ordering-guide" tag="li"><a class="nav-link">Ordering Guide</a></router-link>
        </ul>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>


<style scoped>
h1 {
  font-size: 1.5em;
}
h2 {
  font-size: 1.2em;
}
</style>