<template>
  <div class="box" v-for="post in posts" :key="post.id">
    <PostItem :post="post" @post-remove="handleRemovePost" />
  </div>
</template>

<script>
import PostItem from "@/Post/Component/PostItem.vue";

export default {
  name: "PostList",
  components: {
    PostItem,
  },
  props: ["posts"],
  emits: ["post-remove"],
  setup(props, { emit }) {
    const handleRemovePost = post => {
      emit("post-remove", post);
    };

    return {
      handleRemovePost,
    };
  },
};
</script>
