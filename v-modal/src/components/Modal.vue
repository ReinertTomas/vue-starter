<template>
  <div class="modal fade" v-if="show" :class="showClass" :style="showStyle">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button type="button" class="close" @click="toggleModal">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="toggleModal">
            Close
          </button>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-backdrop fade" v-if="showClass" :class="showClass"></div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    showClass() {
      return this.show ? "show" : "";
    },
    showStyle() {
      return this.show ? "display: block" : "";
    },
  },
  methods: {
    toggleModal() {
      this.show = !this.show;
    },
  },
};
</script>
