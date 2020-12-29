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

export default {
  name: "Create",
  setup() {
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);

    const handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, "");
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    const router = useRouter();
    const error = ref(null);

    const handleFormSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
      };

      try {
        await fetch("http://localhost:3000/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(post),
        });
      } catch (err) {
        error.value = err.message;
        console.error(error.value);
      }

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
