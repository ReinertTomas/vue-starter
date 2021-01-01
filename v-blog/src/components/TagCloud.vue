<template>
  <div class="box">
    <h2 class="title is-6">Tag Cloud</h2>
    <div class="tags are-medium">
      <router-link
        v-for="tag in tags"
        :key="tag"
        :to="{ name: 'Tag', params: { tag: tag } }"
        class="tag is-light"
        >#{{ tag }}</router-link
      >
    </div>
  </div>
</template>

<script>
import useTag from "@/hooks/useTag";

export default {
  name: "TagCloud",
  props: ["posts"],
  setup(props) {
    const { tags } = useTag(props.posts);

    return {
      tags,
    };
  },
};
</script>

<style>
a.tag.router-link-active {
  background-color: #00d1b2 !important;
  color: #fff !important;
}
</style>
