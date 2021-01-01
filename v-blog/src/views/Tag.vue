<template>
  <div class="container">
    <section class="section">
      <h2 class="title is-3">Tag Page</h2>
      <div v-if="error" class="notification is-danger">{{ error }}</div>
      <div v-if="!postsWithTag.length">
        <Spinner />
      </div>
      <div v-else class="columns">
        <div class="column is-three-quarters">
          <PostList
            :posts="postsWithTag"
            @post-list-remove="handleRemovePost"
          />
        </div>
        <div class="column">
          <TagCloud :posts="postsWithTag" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Spinner from "@/components/Spinner.vue";
import PostList from "@/components/PostList.vue";
import TagCloud from "@/components/TagCloud.vue";
import usePost from "@/hooks/usePost";

export default {
  name: "Tag",
  components: {
    Spinner,
    PostList,
    TagCloud,
  },
  setup() {
    const route = useRoute();
    const { posts, error, getPosts, removePost } = usePost();

    getPosts();

    const postsWithTag = computed(() => {
      return posts.value.filter(post => {
        return post.tags.includes(route.params.tag);
      });
    });

    const handleRemovePost = post => {
      removePost(post);
    };

    return {
      error,
      postsWithTag,
      handleRemovePost,
    };
  },
};
</script>
