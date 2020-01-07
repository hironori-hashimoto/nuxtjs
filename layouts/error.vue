<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">Page not found ...(☍﹏⁰) </h1>
    <h1 v-else>An error occured</h1>
    <NuxtLink to="/">Back Top</NuxtLink>
  </v-app>
</template>

<script>
export default {
  props:['error']
}
</script>

<style scoped>
.container{
  padding-top:10%;
  text-align: center;
}
h1 {
  font-size: 22px;
}
</style>
