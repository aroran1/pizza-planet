<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>Welcome to Pizza Planet!</h1>
        <h2>Feeling hungry?</h2>
        <button
          class="btn btn-success"
          @click="goToMenu"
        >Let's order!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToMenu() {
      // anything starting with $ indicates its related to vue library
      // router.go can accept 1 parameter ie (-1) and goes back as many steps back in browser history
      // router.replace accespts { name: 'menuLink' } takes to the page but doesn't maintain browser history
      // router.push is same as replace but mainsta browser history 
      this.$router.push({ name: 'menuLink' })
    }
  }
}
</script>>

<style scoped>
  #home {
    padding: 10%;
    background: url('../../src/assets/pizza.jpeg') no-repeat center center;
    background-size: cover;
    min-height: 600px;
  }

  h1, h2 {
    margin: 6%;
  }

  .background {
    background: #eee;
    opacity: 0.8;
    max-width: 60%;
    margin: 0 auto;
    padding: 20px 0;
  }
</style>