<template>
  <nav class="navbar is-white">
    <div class="container">
      <div class="navbar-menu is-flex is-justify-content-center">
        <router-link :to="{ name: 'Home' }" class="navbar-item"
          >Projects
        </router-link>
        <router-link :to="{ name: 'ProjectAdd' }" class="navbar-item"
          >Add Project
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
