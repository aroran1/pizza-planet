<template>
  <footer class="row">
    <nav class="navbar navbar-expand-lg">
      <ul class="navbar-nav">
        <router-link :to="homeLink" tag="li"><a class="nav-link">Home</a></router-link>
        <router-link :to="aboutLink" tag="li"><a class="nav-link">About</a></router-link>
        <router-link :to="adminLink" tag="li"><a class="nav-link">Admin</a></router-link>
      </ul>
    </nav>
  </footer>
</template>


<script>
export default{
  data() {
    return {
      homeLink: '/',
      aboutLink: "/about",
      adminLink: "/admin"
    }
  }
}
</script>