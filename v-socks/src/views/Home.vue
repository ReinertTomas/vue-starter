<template>
  <div class="text-center py-5 px-3">
    <h1>{{ title }}</h1>
  </div>
  <div class="row">
    <div class="col-4">
      <div class="card shadow border-0">
        <div class="card-body">
          <img
            class="card-img-top"
            :src="image"
            alt="Card image"
            style="width: 100%;"
          />
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100 shadow border-0">
        <div class="card-body">
          <span>Cart ({{ cart }})</span>
          <p v-if="inventory > 10">In Stock</p>
          <p v-else-if="inventory <= 10 && inventory > 0">
            Almost sold out!
          </p>
          <p v-else>Out of Stock</p>
          <p v-if="onSale">On Sale!</p>
          <ul>
            <li v-for="(detail, index) in details" :key="index">
              {{ detail }}
            </li>
          </ul>
          <button type="button" class="btn btn-primary" @click="addToCart">
            Add
          </button>
          <button type="button" class="btn btn-danger" @click="removeFromCart">
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data() {
    return {
      title: "Socks",
      image: require("@/assets/img/socks_green.jpg"),
      quantity: 100,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      cart: 0,
    };
  },
  methods: {
    addToCart() {
      this.cart++;
    },
    removeFromCart() {
      if (this.cart > 0) {
        this.cart--;
      }
    },
  },
});
</script>
