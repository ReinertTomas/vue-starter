<template>
  <form class="mb-6" @submit.prevent="handleSubmitForm">
    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="email"
          placeholder="* Email"
          required
          v-model="email"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="password"
          placeholder="* Password"
          required
          v-model="password"
          :class="{ 'is-danger': passwordError }"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
        <span
          class="icon is-small is-right has-text-danger"
          v-if="passwordError"
        >
          <i class="fas fa-exclamation-triangle"></i>
        </span>
      </div>
      <p class="help is-danger" v-if="passwordError">This email is invalid</p>
    </div>

    <div class="field">
      <label class="label">Role</label>
      <div class="control has-icons-left">
        <div class="select">
          <select v-model="role">
            <option value="developer">Web Developer</option>
            <option value="designer">Web Designer</option>
          </select>
        </div>
        <span class="icon is-small is-left">
          <i class="fas fa-user-tag"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Skills</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="email"
          placeholder="* Skill"
          v-model="skill"
          @keyup="addSkill"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-tags"></i>
        </span>
      </div>
    </div>
    <div class="tags are-medium">
      <a
        class="tag is-primary"
        v-for="(skill, index) in skills"
        :key="index"
        @click="removeSkill(skill)"
        >{{ skill }}
      </a>
    </div>

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox" v-model="terms" required />
          I agree to the <a href="#">terms and conditions</a>
        </label>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
    </div>
  </form>
  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms: {{ terms }}</p>
  <p>Skills: {{ skills }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: "tomas.reinert@gmail.com",
      password: "",
      role: "designer",
      terms: false,
      skill: "",
      skills: [],
      passwordError: false,
    };
  },
  methods: {
    addSkill(event) {
      if (event.key === "," && this.skill) {
        let skill = this.skill.substr(0, this.skill.length - 1);
        if (!this.skills.includes(skill)) {
          this.skills.push(skill);
        }
        this.skill = "";
      }
    },
    removeSkill(skill) {
      this.skills = this.skills.filter(item => {
        return skill !== item;
      });
    },
    handleSubmitForm() {
      this.validatePassword();

      if (!this.passwordError) {
        console.log(this.email);
        console.log(this.password);
        console.log(this.role);
        console.log(this.skills);
        console.log(this.terms);
      }
    },
    validatePassword() {
      this.passwordError = this.password.length < 5 ? true : false;
    },
  },
};
</script>
