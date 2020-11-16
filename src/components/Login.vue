<template>
  <div v-if="getCurrentUser">
    <button
      type="button"
      class="btn btn-danger"
      @click.prevent="signOut"
    >Sign out</button>
  </div>
  <div v-else>
    <h1>Login</h1>
    <p>Logged in as {{ getCurrentUser }}</p>
    <form>
      <div class="form-group row">
        <label>Email address</label> 
        <input type="email" class="form-control" id="email" placeholder="Enter email" />
      </div>

      <div class="form-group row">
        <label>Password</label> 
        <input type="password" class="form-control" id="password" placeholder="Enter password" />
      </div>

      <button
        type="button"
        class="btn btn-primary"
        @click.prevent="signIn"
      >Sign in</button>
      <button
        type="button"
        class="btn btn-danger"
        @click.prevent="signOut"
      >Sign out</button>
    </form>
  </div>
</template>

<script>
import Firebase from "firebase";
import { store } from '../store/index.js';
import { mapGetters } from 'vuex';

Firebase.auth().onAuthStateChanged(function(user){
  if(user) {
    store.dispatch('setUser', user);
  } else {
    store.dispatch('setUser', null);
  }
});

export default {
  methods: {
    signIn() {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      Firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
         // Handle Errors here
         let errorCode = error.code;
         let errorMessage = error.message;

         if (errorCode === 'auth/Wrong-password') {
           alert('Wrong password!');
         } else {
           alert(errorMessage);
         }
      });
    },
    signOut() {
      Firebase.auth().signOut().then(function() {
        alert('Logged out successfully!');
      }).catch(function(error){
        alert(error);
      });
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentUser'
    ])
    // currentUser() {
    //   return this.$store.getters.getCurrentUser
    // }
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
button {
  margin: 5px;
}
form {
  padding: 15px;
}
</style>