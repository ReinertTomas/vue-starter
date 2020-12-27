<template>
  <div class="box" :class="{ completed: project.completed }">
    <article class="p-2">
      <div class="is-flex is-justify-content-space-between">
        <h5
          class="title is-5 is-clickable mb-0"
          @click="showDetail = !showDetail"
        >
          {{ project.title }}
        </h5>
        <div class="actions">
          <router-link
            :to="{ name: 'ProjectEdit', params: { id: project.id } }"
          >
            <span class="material-icons has-text-grey-light px-2">edit</span>
          </router-link>
          <span
            class="material-icons has-text-grey-light px-2"
            @click="removeProject"
            >delete</span
          >
          <span
            class="material-icons px-2"
            @click="toggleComplete"
            :class="[
              project.completed ? 'has-text-success' : 'has-text-grey-light',
            ]"
            >done</span
          >
        </div>
      </div>
      <div class="media" v-if="showDetail">
        <div class="media-content">
          <div class="content">
            <p>{{ project.details }}</p>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      showDetail: false,
      uri: "http://localhost:3000/projects/" + this.project.id,
    };
  },
  methods: {
    removeProject() {
      fetch(this.uri, { method: "DELETE" })
        .then(() => this.$emit("remove", this.project))
        .catch(error => console.error(error));
    },
    toggleComplete() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          completed: !this.project.completed,
        }),
      })
        .then(() => {
          this.$emit("complete", this.project);
        })
        .catch(error => console.error(error));
    },
  },
};
</script>

<style scoped>
.box {
  border-left: 6px solid #3273dc;
}

.box.completed {
  border-left: 6px solid #48c774;
}

.is-clickable,
.actions > span {
  cursor: pointer;
}

.material-icons:hover {
  color: #363636;
}
</style>
