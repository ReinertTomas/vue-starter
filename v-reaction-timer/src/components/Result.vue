<template>
  <p>Reaction time: {{ score }} ms</p>
  <h2 class="has-text-primary">{{ rank }}</h2>
</template>

<script>
export default {
  props: {
    score: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "Ninja Fingers";
    } else if (this.score < 400) {
      this.rank = "Rapid Reflexes";
    } else {
      this.rank = "Snail pace..";
    }
  },
};
</script>
