<template>
  <div v-if="job">
    <h1 class="title is-1">Job Details Page</h1>
    <p>ID: {{ job.id }}</p>
    <p>Title: {{ job.title }}</p>
    <p>Detail: {{ job.detail }}</p>
  </div>
  <p v-else>Loading job details...</p>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then(response => response.json())
      .then(data => (this.job = data))
      .catch(error => console.error(error));
  },
};
</script>
