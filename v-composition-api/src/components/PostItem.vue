<template>
  <article class="media">
    <div class="media-content">
      <div class="content">
        <h3 class="title is-4 mb-2">{{ post.title }}</h3>
        <p>{{ snippet }}</p>
      </div>
    </div>
  </article>
</template>

<script>
import { computed } from "vue";
export default {
  name: "PostItem",
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + "...";
    });

    return {
      snippet,
    };
  },
};
</script>
