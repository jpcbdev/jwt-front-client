<template>
  <section class="hero">
    <div class="hero-body">
      <form v-on:submit="postSignUp">
        <div class="field">
          <div class="control">
            <label class="label" for="email">Email</label>
            <input type="email" name="email" placeholder="Email" v-model="signupModel.email">
          </div>
        </div>
        <div class="field">
          <label class="label" for="username">Username</label>
          <div class="control">
            <input
              type="text"
              name="username"
              placeholder="Username"
              v-model="signupModel.username"
            >
          </div>
        </div>
        <div class="field">
          <label class="label" for="password">Password</label>
          <div class="control">
            <input
              type="password"
              name="password"
              placeholder="Password"
              v-model="signupModel.password"
            >
          </div>
        </div>
        <input type="submit" value="Sign Up" class="button is-primary">
      </form>
    </div>
  </section>
</template>

<script lang="ts">
/* tslint:disable */
import Vue from "vue";
import { signup } from "../models/signup";
import services from "../services/authentication";
import router from "../router";
import store from "../store";

export default Vue.extend({
  data() {
    return {
      signupModel: {} as signup
    };
  },
  methods: {
    async postSignUp(e: any) {
      e.preventDefault();
      store.dispatch("postSignUp", this.signupModel);
    }
  }
});
</script>

<style scoped>
.hero-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
