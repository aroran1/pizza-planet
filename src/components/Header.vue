<template>
  <header class="row">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="/">Pizza Planet</a>
      <ul class="navbar-nav">
        <router-link :to="homeLink" tag="li"><a class="nav-link">Home</a></router-link>
        <router-link :to="menuLink" tag="li"><a class="nav-link">Menu</a></router-link>
      </ul>
    </nav>
  </header>
</template> 

<script>
export default{
  data() {
    return {
      homeLink: '/',
      menuLink: "/menu"
    }
  }
}
</script>

<style scoped>
  header {
    margin-bottom: 20px;
  }

  .navbar-brand {
     font-size: 1.5em;
  }
</style>