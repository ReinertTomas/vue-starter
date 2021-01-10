<template>
  <div class="container">
    <section class="section">
      <h1 class="title is-3">New Post</h1>
      <PostForm />
    </section>
  </div>
</template>

<script>
import PostForm from "@/Post/Component/PostForm.vue";

export default {
  components: {
    PostForm,
  },
};
</script>
