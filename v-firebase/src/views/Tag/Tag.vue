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
          <PostList :posts="postsWithTag" @post-remove="handleRemovePost" />
        </div>
        <div class="column">
          <div v-if="posts.length" class="box">
            <TagList :posts="posts" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Spinner from "@/Layout/Component/Spinner.vue";
import PostList from "@/Post/Component/PostList.vue";
import TagList from "@/Tag/Component/TagList.vue";
import useAlert from "@/Layout/Function/useAlert";
import usePostList from "@/Post/Function/usePostList";
import usePostRemove from "@/Post/Function/usePostRemove";

export default {
  name: "Tag",
  components: {
    Spinner,
    PostList,
    TagList,
  },
  setup() {
    const route = useRoute();
    const { error } = useAlert();
    const { posts, getPosts } = usePostList(error);
    const { handleRemovePost } = usePostRemove(error, posts);

    getPosts();

    const postsWithTag = computed(() => {
      return posts.value.filter(post => {
        return post.tags.includes(route.params.tag);
      });
    });

    return {
      error,
      posts,
      postsWithTag,
      handleRemovePost,
    };
  },
};
</script>
