<template>
  <div class="container is-max-desktop">
    <section class="section">
      <h2 class="title is-5 mb-2">Refs</h2>
      <p class="mb-4">{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
      <div class="buttons">
        <button class="button is-primary" @click="updateNinjaOne">
          Update Ninja One
        </button>
      </div>
      <h2 class="title is-5 mb-2">Reactive</h2>
      <p class="mb-4">{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
      <div class="buttons">
        <button class="button is-primary" @click="updateNinjaTwo">
          Update Ninja Two
        </button>
      </div>
    </section>
    <section class="section">
      <h2 class="title is-5">Computed + Watch + WatchEffect</h2>
      <div class="field">
        <label class="label">Search</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="* Search"
            required
            v-model="search"
          />
        </div>
      </div>
      <ul class="content">
        <ol type="1">
          <li v-for="(name, index) in matchingNames" :key="index">
            {{ name }}
          </li>
        </ol>
      </ul>
      <div class="buttons">
        <button class="button is-primary" @click="handleClick">
          Stop Watch
        </button>
      </div>
    </section>
    <section class="section">
      <h2 class="title is-5">Props</h2>
    </section>
  </div>
</template>

<script>
import { computed, reactive, ref, watch, watchEffect } from "vue";

export default {
  name: "App",
  setup() {
    // Ref vs Reactive
    const ninjaOne = ref({ name: "mario", age: 50 });
    const ninjaTwo = reactive({ name: "Tomas", age: 30 });

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    };
    const updateNinjaTwo = () => {
      ninjaTwo.age = 25;
    };

    // Computed
    const search = ref("");
    const names = ref([
      "mario",
      "yoshi",
      "luigi",
      "toad",
      "bowser",
      "koopa",
      "peach",
    ]);

    const matchingNames = computed(() => {
      return names.value.filter(name => name.includes(search.value));
    });

    // Watch vs WatchEffect
    const stopWatch = watch(search, () => {
      console.log("watch function");
    });
    const stopWatchEffect = watchEffect(() => {
      console.log("watchEffect function", search.value);
    });

    const handleClick = () => {
      stopWatch();
      stopWatchEffect();
    };

    // Props
    const posts = ref([
      {
        id: 1,
        title: "welcome to blog",
        body: "Lorem ipsum",
      },
      {
        id: 2,
        title: "top 5 CSS tips",
        body: "Lorem ipsum",
      },
    ]);

    return {
      ninjaOne,
      updateNinjaOne,
      ninjaTwo,
      updateNinjaTwo,
      search,
      names,
      matchingNames,
      handleClick,
      posts,
    };
  },
};
</script>
