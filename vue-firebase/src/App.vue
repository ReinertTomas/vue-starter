<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "@/Layout/Component/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
