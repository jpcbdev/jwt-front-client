<template>
  <div class="hero">
    <div class="hero-body">
      <h1 class="title is-1">Hi {{userData.username}}</h1>
      <h1 class="title is-2">Your email is: {{userData.email}}</h1>
      <h1>This is your profile</h1>
      <button class="button is-warning" v-on:click="signOut">Cerrar sesion</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import services from "../services/authentication";
import router from "../router";
import { userData } from "../models/userData";
export default Vue.extend({
  data() {
    return {
      userData: {} as userData
    };
  },
  mounted() {
    console.log(localStorage.getItem("jwt"));
    if (localStorage.getItem("jwt")) {
      services
        .getProfile(localStorage.getItem("jwt"))
        .then(res => {
          this.userData = res;
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      router.push("/");
    }
  },
  methods: {
    signOut() {
      localStorage.removeItem("jwt");
      router.push("/");
    }
  }
});
</script>

<style scoped>
</style>
