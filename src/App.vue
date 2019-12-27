<template>
  <div id="app">
    <FieldsTable msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import FieldsTable from "./components/FieldsTable.vue";

export default {
  name: "app",
  components: {
    FieldsTable
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
