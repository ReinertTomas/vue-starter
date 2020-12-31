<template>
  <div class="container">
    <section class="section">
      <h1 class="title is-3">New Post</h1>
      <div v-if="error" class="notification is-danger">{{ error }}</div>
      <form @submit.prevent="handleFormSubmit">
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="* Title"
              required
              v-model="title"
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
              v-model="body"
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
              @keydown.enter.prevent="handleKeydown"
            />
          </div>
        </div>
        <div class="tags are-medium">
          <span class="tag is-light" v-for="tag in tags" :key="tag">
            #{{ tag }}
          </span>
        </div>
        <button class="button is-primary">Add Post</button>
      </form>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import usePost from "@/hooks/usePost";

export default {
  name: "Create",
  setup() {
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);

    const router = useRouter();

    const handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, "");
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    const { error, addPost } = usePost();

    const handleFormSubmit = () => {
      let data = {
        title: title.value,
        body: body.value,
        tags: tags.value,
      };

      addPost(data);

      router.push({ name: "Home" });
    };

    return {
      title,
      body,
      tag,
      tags,
      handleKeydown,
      handleFormSubmit,
      error,
    };
  },
};
</script>
