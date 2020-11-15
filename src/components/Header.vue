<template>
  <header class="row">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="/">Pizza Planet</a>
      <ul class="navbar-nav">
        <router-link :to="{ name: 'homeLink' }" tag="li"><a class="nav-link">Home</a></router-link>
        <router-link :to="{ name: 'menuLink' }" tag="li"><a class="nav-link">Menu</a></router-link>
      </ul>
    </nav>
  </header>
</template> 

<style scoped>
  header {
    margin-bottom: 20px;
  }

  .navbar-brand {
     font-size: 1.5em;
  }
</style>