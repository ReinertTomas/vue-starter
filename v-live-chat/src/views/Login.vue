<template>
  <section class="section hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-fifths">
            <h1 class="title is-3 has-text-centered mb-5">Sign In</h1>
            <div class="card mb-4">
              <div class="card-content">
                <sign-in-form />
              </div>
            </div>
            <nav class="level">
              <div class="level-item has-text-centered">
                <a href="#">Forgot Password?</a>
              </div>
              <div class="level-item has-text-centered">
                <router-link :to="{ name: 'register' }">
                  Create an Account
                </router-link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SignInForm from "@/components/SignInForm.vue";

export default {
  name: "Login",
  components: {
    SignInForm,
  },
};
</script>
