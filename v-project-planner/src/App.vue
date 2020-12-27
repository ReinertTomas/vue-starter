<template>
  <Navbar />
  <section class="section">
    <div class="container is-max-desktop">
      <router-view />
    </div>
  </section>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
