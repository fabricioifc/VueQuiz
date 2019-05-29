<template>
  <div id="quiz">
    <h1>Posts</h1>
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <h2>
            Post List
            <b-link to="/add-post">(Add Post)</b-link>
          </h2>
          <b-table striped hover :items="posts" :fields="fields">
            <template slot="actions" scope="row">
              <b-link :to="{ name: 'PostDetail', params: { id: row.item.id } }">Detalhes</b-link>
            </template>
          </b-table>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <p>{{posts}}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { db, postsRef } from "@/database";
export default {
  name: "PostList",
  props: {},
  data: () => ({
    fields: {
      titulo: { label: 'Título', sortable: true, 'class': 'text-left' },
      actions: { label: 'Action', 'class': 'text-center' }
    },
    posts: [],
  }),
  firestore() {
    return {
      posts: postsRef
    };
  }
};
</script>

<style scoped>
</style>
