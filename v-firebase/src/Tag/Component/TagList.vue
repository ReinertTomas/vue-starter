<template>
  <div class="tags are-medium">
    <TagItem v-for="tag in tags" :key="tag" :tag="tag" />
  </div>
</template>

<script>
import TagItem from "@/Tag/Component/TagItem.vue";
import useTag from "@/Tag/Function/useTag";

export default {
  name: "TagList",
  components: {
    TagItem,
  },
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
