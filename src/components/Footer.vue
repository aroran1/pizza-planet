<template>
  <footer class="row">
    <nav class="navbar navbar-expand-lg">
      <ul class="navbar-nav">
        <router-link :to="{ name: 'homeLink' }" tag="li"><a class="nav-link">Home</a></router-link>
        <router-link :to="{ name: 'aboutLink' }" tag="li"><a class="nav-link">About</a></router-link>
        <router-link :to="{ name: 'adminLink' }" tag="li"><a class="nav-link">Admin</a></router-link>
      </ul>
    </nav>
  </footer>
</template>