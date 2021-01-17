<template>
  <div class="notification is-danger" v-if="state.error">{{ state.error }}</div>
  <form @submit.prevent="handleFormSubmit">
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
        <button class="button is-link">Login</button>
      </div>
      <div class="control">
        <button class="button is-link is-light">Cancel</button>
      </div>
    </div>
  </form>
</template>

<script>
import { reactive } from "vue";
import useSignIn from "@/hooks/useSignIn";

export default {
  setup() {
    const data = reactive({
      email: "john.doe@example.com",
      password: "123456",
    });

    const { state, signIn } = useSignIn();

    const handleFormSubmit = async () => {
      signIn(data.email, data.password);

      if (!state.error) {
        console.log("user signed in");
      }
    };

    return {
      data,
      handleFormSubmit,
      state,
    };
  },
};
</script>
