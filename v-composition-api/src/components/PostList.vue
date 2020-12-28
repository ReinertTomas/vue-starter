<template>
  <div class="box" v-for="post in posts" :key="post.id">
    <PostItem :post="post" />
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "vue";
import PostItem from "@/components/PostItem.vue";

export default {
  name: "PostList",
  components: {
    PostItem,
  },
  props: ["posts"],
  setup() {
    onMounted(() => console.log("component mounted"));
    onUnmounted(() => console.log("component unmounted"));
    onUpdated(() => console.log("component updated"));
  },
};
</script>
