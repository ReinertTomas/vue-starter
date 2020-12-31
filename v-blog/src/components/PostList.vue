<template>
  <div class="box" v-for="post in posts" :key="post.id">
    <PostItem :post="post" @post-item-remove="handleRemovePost" />
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
  name: "PostList",
  components: {
    PostItem,
  },
  props: ["posts"],
  emits: ["post-list-remove"],
  setup(props, { emit }) {
    const handleRemovePost = post => {
      emit("post-list-remove", post);
    };

    return {
      handleRemovePost,
    };
  },
};
</script>
