<template>
  <section class="section">
    <div class="container">
      <nav class="navbar mb-6">
        <div class="navbar-menu">
          <div class="buttons">
            <router-link :to="{ name: 'Home' }" class="button is-primary"
              >Home
            </router-link>
            <router-link :to="{ name: 'About' }" class="button is-primary"
              >About
            </router-link>
            <router-link :to="{ name: 'Job' }" class="button is-primary"
              >Jobs
            </router-link>
          </div>
        </div>
      </nav>
      <div class="buttons">
        <button class="button is-light" @click="toRedirect">Redirect</button>
        <button class="button is-light" @click="toBack">Back</button>
        <button class="button is-light" @click="toForward">Forward</button>
      </div>
      <router-view />
    </div>
  </section>
</template>

<script>
export default {
  name: "App",
  methods: {
    toRedirect() {
      this.$router.push({ name: "Home" });
    },
    toBack() {
      this.$router.go(-1);
    },
    toForward() {
      this.$router.go(1);
    },
  },
};
</script>
