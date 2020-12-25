<template>
  <h1 class="title is-1">Jobs</h1>
  <ul v-if="jobs.length">
    <li v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'JobDetail', params: { id: job.id } }">
        {{ job.title }}
      </router-link>
    </li>
  </ul>
  <p v-else>Loading job details...</p>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then(response => response.json())
      .then(data => (this.jobs = data))
      .catch(error => console.error(error));
  },
};
</script>
