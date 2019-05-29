<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">{{user == null ? 'Aprender' : user.email}}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-if="user == null" to="/login">Login</b-nav-item>
          <b-nav-item v-if="user != null" to="/logout">Sair</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item to="/sobre">Sobre</b-nav-item>
          <b-nav-item to="/quiz">Quiz</b-nav-item>
          <b-nav-item to="/posts">Posts</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { auth } from "@/database";

export default {
  name: "navbar",
  props: {},
  data() {
    return {
      user: null
    };
  },
  methods: {
    
  },
  created() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }
};
</script>

<style scoped>
</style>
