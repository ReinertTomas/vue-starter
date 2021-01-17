<template>
  <div class="notification is-danger" v-if="state.error">{{ state.error }}</div>
  <form @submit.prevent="handleFormSubmit">
    <div class="field">
      <label class="label">Name</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="text"
          placeholder="Name"
          required
          v-model="data.displayName"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <span class="icon is-small is-right is-hidden">
          <i class="fas fa-exclamation-triangle"></i>
        </span>
      </div>
      <p class="help is-danger is-hidden">This name is invalid</p>
    </div>
    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="email"
          placeholder="Email"
          required
          v-model="data.email"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right is-hidden">
          <i class="fas fa-exclamation-triangle"></i>
        </span>
      </div>
      <p class="help is-danger is-hidden">This email is invalid</p>
    </div>
    <div class="field">
      <label class="label">Password</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="password"
          placeholder="Password"
          required
          v-model="data.password"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
        <span class="icon is-small is-right is-hidden">
          <i class="fas fa-exclamation-triangle"></i>
        </span>
      </div>
      <p class="help is-danger is-hidden">This email is invalid</p>
    </div>
    <hr />
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Register</button>
      </div>
    </div>
  </form>
</template>

<script>
import { reactive } from "vue";
import useSignUp from "@/hooks/useSignUp";

export default {
  setup() {
    const data = reactive({
      displayName: "",
      email: "",
      password: "",
    });

    const { state, signUp } = useSignUp();

    const handleFormSubmit = async () => {
      await signUp(data.email, data.password, data.displayName);
    };

    return {
      data,
      handleFormSubmit,
      state,
    };
  },
};
</script>
