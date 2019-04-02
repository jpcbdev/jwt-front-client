<template>
  <div>
    <nav class="navbar is-black">
      <div class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" v-on:click="signOut">Cerrar sesion</a>
        </div>
      </div>
    </nav>
    <div class="hero">
      <div class="hero-body">
        <h1 class="title is-1">Hi {{userData.username}}</h1>
        <h1 class="title is-2">Your email is: {{userData.email}}</h1>
        <h1>This is your profile</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import store from "../store";

export default Vue.extend({
  data() {
    return {};
  },
  mounted() {
    store.dispatch("getProfile", store.getters.getToken);
  },
  methods: {
    signOut() {
      store.commit("signOut");
    }
  },
  computed: {
    userData: () => {
      return store.getters.getUserData;
    }
  }
});
</script>

<style scoped>
</style>
