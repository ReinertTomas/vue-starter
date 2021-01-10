<template>
  <div v-if="error" class="notification is-danger">
    <p class="mb-1">
      <strong>Oops. Something went wrong.</strong>
    </p>
    <p>{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: ["error"],
};
</script>
