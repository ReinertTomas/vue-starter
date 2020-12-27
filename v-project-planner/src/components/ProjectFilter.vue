<template>
  <div class="buttons">
    <button
      class="button"
      :class="{ 'is-primary': current === 'all' }"
      @click="updateFilter('all')"
    >
      View All
    </button>
    <button
      class="button"
      :class="{ 'is-primary': current === 'completed' }"
      @click="updateFilter('completed')"
    >
      Complated
    </button>
    <button
      class="button"
      :class="{ 'is-primary': current === 'ongoing' }"
      @click="updateFilter('ongoing')"
    >
      On Going
    </button>
  </div>
</template>

<script>
export default {
  name: "ProjectFilter",
  props: ["current"],
  methods: {
    updateFilter(by) {
      this.$emit("filterChange", by);
    },
  },
};
</script>
