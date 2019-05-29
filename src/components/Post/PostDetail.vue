<template>
  <div id="quiz">
    <h1>Detail {{id}}</h1>
    <b-container fluid>
      <b-row>
        <b-col cols="12"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { db, postsRef } from "@/database";
import route from "@/router";
export default {
  name: "PostDetail",
  props: ["id"],
  data: () => ({
    id: this.$route.params.id
  }),

  methods() {},

  created() {
    console.log(this.$route.params.id);
  }
};
</script>

<style scoped>
</style>
