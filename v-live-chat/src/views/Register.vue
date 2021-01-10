<template>
  <section class="section hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-fifths">
            <h1 class="title is-3 has-text-centered mb-5">Register</h1>
            <div class="card">
              <div class="card-content">
                <sign-up-form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SignUpForm from "@/components/SignUpForm.vue";

export default {
  name: "Register",
  components: {
    SignUpForm,
  },
};
</script>
