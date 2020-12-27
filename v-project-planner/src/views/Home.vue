<template>
  <h1 class="title is-2">Planner project</h1>
  <ProjectFilter @filterChange="handleFilterProject" :current="filter" />
  <div v-if="projects.length">
    <ProjectItem
      v-for="project in filteredProjects"
      :key="project.id"
      :project="project"
      @remove="handleRemoveProject"
      @complete="handleCompleteProject"
    />
  </div>
</template>

<script>
import ProjectItem from "@/components/ProjectItem.vue";
import ProjectFilter from "@/components/ProjectFilter.vue";

export default {
  name: "Home",
  components: {
    ProjectItem,
    ProjectFilter,
  },
  data() {
    return {
      projects: [],
      filter: "all",
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then(res => res.json())
      .then(data => (this.projects = data))
      .catch(error => console.error(error));
  },
  computed: {
    filteredProjects() {
      if (this.filter === "completed") {
        return this.projects.filter(item => item.completed);
      }
      if (this.filter === "ongoing") {
        return this.projects.filter(item => !item.completed);
      }
      return this.projects;
    },
  },
  methods: {
    handleRemoveProject(project) {
      this.projects = this.projects.filter(item => {
        return project.id !== item.id;
      });
    },
    handleCompleteProject(project) {
      let temp = this.projects.find(item => {
        return project.id === item.id;
      });
      temp.completed = !temp.completed;
    },
    handleFilterProject(by) {
      this.filter = by;
    },
  },
};
</script>
