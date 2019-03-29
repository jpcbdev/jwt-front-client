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
        <!-- <button class="button is-primary">Sign in</button> -->
        <input type="submit" value="Sign in" class="button is-primary">
      </form>
      <div>{{signinModel}}</div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { signin } from "../models/signin";
import authentication from "../services/authentication";
import router from "../router";

export default Vue.extend({
  data() {
    return {
      signinModel: {} as signin
    };
  },
  created() {
    if (localStorage.getItem("jwt")) {
      router.push("/profile");
    }
  },
  methods: {
    async postSignIn(e: any) {
      e.preventDefault();
      await authentication
        .postSignIn(this.signinModel)
        .then(result => {
          if (!result) {
            this.signinModel = {} as signin;
            this.$toast.bottom("Usuario o contraseña invalidos");
          } else {
            this.$toast.bottom("Bienvenido");
            localStorage.setItem("jwt", result.token);
            router.push("/profile");
          }
        })
        .catch(error => console.log(error));
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
