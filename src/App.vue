<template>
  <div id="app">
    <FormSelect />
    <FieldsTable />
  </div>
</template>

<script>
import FormSelect from "./components/FormSelect.vue";
import FieldsTable from "./components/FieldsTable.vue";

export default {
  name: "app",
  components: {
    FormSelect,
    FieldsTable
  }
};
</script>