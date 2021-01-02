<template>
  <div class="container">
    <section class="section">
      <Alert :error="error" />
      <div v-if="!post">
        <Spinner />
      </div>
      <div v-else>
        <PostDetail :post="post" />
      </div>
    </section>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import Alert from "@/Layout/Component/Alert.vue";
import Spinner from "@/Layout/Component/Spinner.vue";
import PostDetail from "@/Post/Component/PostDetail.vue";
import useAlert from "@/Layout/Function/useAlert";
import usePostGet from "@/Post/Function/usePostGet";

export default {
  components: {
    Alert,
    Spinner,
    PostDetail,
  },
  setup() {
    const route = useRoute();
    const { error } = useAlert();
    const { post, getPost } = usePostGet(error);

    getPost(route.params.id);

    return {
      error,
      post,
    };
  },
};
</script>
