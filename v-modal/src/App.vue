<template>
  <Navbar />

  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h1 class="m-5">{{ title }}</h1>
        <button class="btn btn-primary" @click="$refs.modal.toggleModal()">
          Modal
        </button>
      </div>
    </div>
  </div>

  <teleport to="#modal">
    <Modal ref="modal" title="Title">
      <template v-slot:body>
        <p class="m-0">Modal body text goes here.</p>
      </template>
      <template v-slot:footer>
        <button type="button" class="btn btn-primary">Save changes</button>
      </template>
    </Modal>
  </teleport>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Modal,
  },
  data() {
    return {
      title: "This is awesome modal",
    };
  },
};
</script>
