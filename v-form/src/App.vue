<template>
  <section class="section">
    <div class="container">
      <div class="columns is-mobile">
        <div class="column is-three-fifths is-offset-one-fifth">
          <h1 class="title">Form</h1>
          <SingUpForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SingUpForm from "@/components/SingUpForm.vue";
export default {
  name: "App",
  components: { SingUpForm },
};
</script>
