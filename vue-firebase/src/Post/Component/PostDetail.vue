<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ post.title }}</p>
          <p class="subtitle is-6">@{{ post.author }}</p>
        </div>
        <div class="media-right">
          <p class="">{{ post.createdAt }}</p>
        </div>
      </div>
      <div class="content">
        {{ post.body }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostDetail",
  props: ["post"],
};
</script>
