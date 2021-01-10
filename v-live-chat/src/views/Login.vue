<template>
  <section class="section hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-fifths">
            <div class="card">
              <div class="card-content">
                <sign-in-form />
              </div>
            </div>
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
