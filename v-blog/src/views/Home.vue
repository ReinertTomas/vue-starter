<template>
  <div class="container">
    <section class="section">
      <h2 class="title is-3">Async / Await</h2>
      <div v-if="error" class="notification is-danger">{{ error }}</div>
      <div v-if="posts.length" class="mb-5">
        <PostList :posts="posts" @post-list-remove="handleRemovePost" />
      </div>
      <div v-else>
        <Spinner />
      </div>
    </section>
  </div>
</template>

<script>
import Spinner from "@/components/Spinner.vue";
import PostList from "@/components/PostList.vue";
import usePost from "@/hooks/usePost";

export default {
  name: "Home",
  components: {
    PostList,
    Spinner,
  },
  setup() {
    // Async / Await
    const { posts, error, getPosts, removePost } = usePost();

    getPosts();

    const handleRemovePost = post => {
      removePost(post);
    };

    return {
      posts,
      error,
      handleRemovePost,
    };
  },
};
</script>
