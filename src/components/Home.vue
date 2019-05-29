<template>
  <div class="container">
    <img width="25%" src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2></h2>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
