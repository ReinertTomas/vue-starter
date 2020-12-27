<template>
  <h1 class="title is-2">Edit Project</h1>
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
          <button class="button is-primary">Edit Project</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ProjectEdit",
  props: ["id"],
  data() {
    return {
      title: "",
      details: "",
      uri: "http://localhost:3000/projects/" + this.id,
    };
  },
  mounted() {
    fetch(this.uri)
      .then(res => res.json())
      .then(data => {
        this.title = data.title;
        this.details = data.details;
      });
  },
  methods: {
    handleFormSubmit() {
      fetch(this.uri, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: this.title,
          details: this.details,
        }),
      })
        .then(() => this.$router.push({ name: "Home" }))
        .catch(error => console.error(error));
    },
  },
};
</script>
