<template>
  <div>
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Field</th>
          <th scope="col">Hectares</th>
          <th scope="col">Crop (Season 2020)</th>
          <th scope="col">Variety</th>
          <th scope="col">Clover planted</th>
          <th scope="col">Eco cert.</th>
          <th scope="col">Acidic soil</th>
        </tr>
      </thead>
      <tbody>
        <FieldsTableRow v-for="(field, key) in fields" :field="field" :key="key" />
      </tbody>
    </table>
  </div>
</template>

<script>
import FieldsTableRow from "./FieldsTableRow";
import { mapState } from "vuex";

export default {
  name: "FieldsTable",
  computed: {
    ...mapState(["fields"])
  },
  components: {
    FieldsTableRow
  }
};
</script>
