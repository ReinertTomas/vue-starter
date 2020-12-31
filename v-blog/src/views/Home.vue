<template>
  <div class="container">
    <section class="section">
      <h2 class="title is-3">Async / Await</h2>
      <PostList />
    </section>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";

export default {
  name: "Home",
  components: {
    PostList,
  },
};
</script>
