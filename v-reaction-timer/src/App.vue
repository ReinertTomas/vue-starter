<template>
  <section class="section has-text-centered">
    <div class="container">
      <h1 class="title">
        Ninja Reaction Timer
      </h1>
      <button @click="start" class="button is-primary" :disabled="isPlaying">
        Play
      </button>
    </div>
  </section>
  <section class="section has-text-centered">
    <div class="columns is-mobile">
      <div class="column is-three-fifths is-offset-one-fifth">
        <Block v-if="isPlaying" :delay="delay" @end="end" />
        <Result v-if="showScore" :score="score" />
      </div>
    </div>
  </section>
</template>

<script>
import Block from "@/components/Block.vue";
import Result from "@/components/Result.vue";

export default {
  name: "App",
  components: {
    Block,
    Result,
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showScore: false,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showScore = false;
    },
    end(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showScore = true;
    },
  },
};
</script>
