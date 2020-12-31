<template>
  <div v-if="error" class="notification is-danger">{{ error }}</div>
  <div v-if="posts.length" class="mb-5">
    <div class="box" v-for="post in posts" :key="post.id">
      <PostItem :post="post" @post-remove="handleRemovePost" />
    </div>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
import getPosts from "@/hooks/getPosts";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "PostList",
  components: {
    PostItem,
    Spinner,
  },
  setup() {
    // Async / Await
    const { posts, error, load } = getPosts();

    load();

    const handleRemovePost = id => {
      posts.value = posts.value.filter(post => {
        return id !== post.id;
      });
    };

    return {
      posts,
      error,
      handleRemovePost,
    };
  },
};
</script>
