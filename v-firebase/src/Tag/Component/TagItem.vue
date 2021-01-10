<template>
  <router-link :to="{ name: 'tag', params: { tag: tag } }" class="tag is-light">
    #{{ tag }}
  </router-link>
</template>

<script>
export default {
  name: "TagItem",
  props: ["tag"],
};
</script>
