<template>
  <b-container fluid class="p-4 bg-dark">
    <b-row>
      <b-col>
        <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
      </b-col>
      <b-col>
        <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
      </b-col>
      <b-col>
        <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
      </b-col>
    </b-row>
    <b-row class="text-white">
      <b-col>{{msg}}</b-col>
      <b-col>2 of 3</b-col>
      <b-col>3 of 3</b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Sobre",
  props: {
    msg: String
  }
};
</script>

<style scoped>
</style>

