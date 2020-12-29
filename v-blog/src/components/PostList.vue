<template>
  <div class="box" v-for="post in posts" :key="post.id">
    <PostItem :post="post" />
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
};
</script>
