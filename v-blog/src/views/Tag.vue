<template>
  <div class="container">
    <section class="section">
      <h2 class="title is-3">Tag Page</h2>
      <PostList />
    </section>
  </div>
</template>

<script>
// import { useRoute } from "vue-router";
// import Spinner from "@/components/Spinner.vue";
import PostList from "@/components/PostList.vue";

export default {
  name: "Tag",
  components: {
    // Spinner,
    PostList,
  },
  setup() {
    // const route = useRoute();
    // return {
    //   posts,
    //   error,
    //   load,
    // };
  },
};
</script>
