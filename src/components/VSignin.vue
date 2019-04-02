<template>
  <section class="hero">
    <div class="hero-body">
      <form v-on:submit="postSignIn">
        <div class="field">
          <label class="label" for="username">Username</label>
          <div class="control">
            <input type="text" placeholder="Username" v-model="signinModel.username">
          </div>
        </div>
        <div class="field">
          <label class="label" for="password">Password</label>
          <div class="control">
            <input type="password" placeholder="Password" v-model="signinModel.password">
          </div>
        </div>
        <input type="submit" value="Sign in" class="button is-primary">
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { signin } from "../models/signin";
import store from "../store";

export default Vue.extend({
  data() {
    return {
      signinModel: {} as signin
    };
  },
  methods: {
    async postSignIn(e: any) {
      e.preventDefault();
      store.dispatch("postSignIn", this.signinModel);
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
