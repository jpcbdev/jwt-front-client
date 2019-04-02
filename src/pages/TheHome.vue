<template>
  <div>
    <nav class="navbar is-primary">
      <div class="container">
        <div class="navbar-brand">
          <div class="navbar-item">
            <p>logo</p>
          </div>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <router-link to="/" tag="a" class="navbar-item">Home</router-link>
            <router-link to="/signup" tag="a" class="navbar-item">Sign Up</router-link>
            <router-link to="/signin" tag="a" class="navbar-item">Sign In</router-link>
          </div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
// tslint:disable-next-line
import Vue from "vue";
import store from "../store";
export default Vue.extend({
  data() {
    return {};
  },
});
</script>

<style scoped>
</style>

