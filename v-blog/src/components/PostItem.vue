<template>
  <article class="media">
    <div class="media-content">
      <div class="content">
        <router-link :to="{ name: 'Detail', params: { id: post.id } }">
          <h3 class="title is-4 mb-2">#{{ post.id }} - {{ post.title }}</h3>
        </router-link>
        <p>{{ snippet }}</p>
        <div class="tags are-medium">
          <span class="tag is-primary" v-for="tag in post.tags" :key="tag">
            #{{ tag }}
          </span>
        </div>
      </div>
    </div>
    <div class="media-right">
      <button class="delete" @click="handleRemovePost"></button>
    </div>
  </article>
</template>

<script>
import { computed } from "vue";

export default {
  name: "PostItem",
  props: ["post"],
  emits: ["post-item-remove"],
  setup(props, { emit }) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + "...";
    });

    const handleRemovePost = () => {
      emit("post-item-remove", props.post);
    };

    return {
      snippet,
      handleRemovePost,
    };
  },
};
</script>
