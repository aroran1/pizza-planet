<template>
  <div>
    <h1>Login</h1>
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
</style>