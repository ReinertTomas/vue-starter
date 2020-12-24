.<template>
  <section
    class="hero is-medium is-primary"
    v-if="showBlock"
    @click="stopTimer"
  >
    <div class="hero-body">
      <div class="container">
        <h1 class="title">click</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    delay: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.$emit("end", this.reactionTime);
    },
  },
};
</script>

<style scope>
.hero {
  border-radius: 10px;
}
</style>
