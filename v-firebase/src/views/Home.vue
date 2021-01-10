<template>
  <div class="container">
    <section class="section">
      <div class="is-flex is-justify-content-space-between mb-5">
        <h2 class="title is-3 mb-0">Vue Firebase</h2>
        <div class="buttons">
          <router-link :to="{ name: 'post-create' }" class="button is-primary">
            New Post
          </router-link>
        </div>
      </div>
      <Alert :error="error" />
      <div v-if="!posts.length">
        <Spinner />
      </div>
      <div v-else class="columns">
        <div class="column is-three-quarters">
          <PostList :posts="posts" @post-remove="handleRemovePost" />
        </div>
        <div class="column">
          <div class="box">
            <TagList :posts="posts" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Alert from "@/Layout/Component/Alert.vue";
import Spinner from "@/Layout/Component/Spinner.vue";
import PostList from "@/Post/Component/PostList.vue";
import useAlert from "@/Layout/Function/useAlert";
import usePostList from "@/Post/Function/usePostList";
import usePostRemove from "@/Post/Function/usePostRemove";
import TagList from "@/Tag/Component/TagList.vue";

export default {
  components: {
    Alert,
    Spinner,
    PostList,
    TagList,
  },
  setup() {
    const { error } = useAlert();
    const { posts, getPosts } = usePostList(error);
    const { handleRemovePost } = usePostRemove(error, posts);

    getPosts();

    return {
      error,
      posts,
      handleRemovePost,
    };
  },
};
</script>
