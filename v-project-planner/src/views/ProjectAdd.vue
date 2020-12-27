<template>
  <h1 class="title is-2">Add Project</h1>
  <div class="box">
    <form @submit.prevent="handleFormSubmit">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="* Title"
            required
            v-model="title"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Details</label>
        <div class="control">
          <textarea
            class="textarea"
            placeholder="* Details"
            required
            v-model="details"
          ></textarea>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-primary">Add Project</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      details: "",
    };
  },
  methods: {
    handleFormSubmit() {
      let project = {
        title: this.title,
        details: this.details,
        completed: false,
      };

      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
      })
        .then(() => {
          this.$router.push({ name: "Home" });
        })
        .catch(error => console.error(error));
    },
  },
};
</script>
