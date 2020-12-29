<template>
  <div class="container">
    <section class="section">
      <div v-if="error" class="notification is-danger">{{ error }}</div>
      <div v-if="post">
        <h3 class="title is-3">{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
      <div v-else>
        <Spinner />
      </div>
    </section>
  </div>
</template>

<script>
import getPost from "@/hooks/getPost";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "Detail",
  components: {
    Spinner,
  },
  props: ["id"],
  setup(props) {
    const { post, error, load } = getPost(props.id);

    load();

    return {
      post,
      error,
    };
  },
};
</script>
