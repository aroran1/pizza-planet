<template>
  <div id="app">
    <div class="container">
      <pp-header></pp-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="ordering-guide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div>
    <div class="container">
      <pp-footer></pp-footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { dbMenuRef, dbOrdersRef } from "./database/firebaseConfig.js";

export default {
  name: 'App',
  components: {
    ppHeader: Header,
    ppFooter: Footer
  },
  created() {
    // once the app is loaded this will dispatch the setMenuRef action which will bind the menuItems to the app state
    this.$store.dispatch('setMenuRef', dbMenuRef);
    this.$store.dispatch('setOrdersRef', dbOrdersRef)
  }
}
</script>
