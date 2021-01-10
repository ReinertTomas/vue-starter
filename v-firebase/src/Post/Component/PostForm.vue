<template>
  <Alert :error="error" />
  <form @submit.prevent="handleFormSubmit">
    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="* Title"
          required
          v-model="post.title"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Author</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="* Author"
          required
          v-model="post.author"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Body</label>
      <div class="control">
        <textarea
          class="textarea"
          placeholder="* Body"
          required
          v-model="post.body"
        ></textarea>
      </div>
    </div>
    <div class="field">
      <label class="label">Tags</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="* Tag"
          v-model="tag"
          @keydown.enter.prevent="handleTagAdd"
        />
      </div>
    </div>
    <div class="tags are-medium">
      <span class="tag is-light" v-for="tag in post.tags" :key="tag">
        #{{ tag }}
      </span>
    </div>
    <button class="button is-primary">Add Post</button>
  </form>
</template>

<script>
import Alert from "@/Layout/Component/Alert.vue";
import useAlert from "@/Layout/Function/useAlert";
import usePostForm from "@/Post/Function/usePostForm";

export default {
  name: "PostForm",
  components: {
    Alert,
  },
  setup() {
    const { error } = useAlert();
    const { post, tag, handleTagAdd, handleFormSubmit } = usePostForm(error);

    return {
      error,
      post,
      tag,
      handleTagAdd,
      handleFormSubmit,
    };
  },
};
</script>

<style></style>
