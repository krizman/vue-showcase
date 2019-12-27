<template>
  <div>
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Field</th>
          <th scope="col">Hectares</th>
          <th scope="col">Crop (season 2020)</th>
          <th scope="col">Variety</th>
          <th scope="col">Clover planted</th>
          <th scope="col">Eco cert.</th>
          <th scope="col">Acidic soil</th>
        </tr>
      </thead>
      <tbody>
        <FieldsTableRow :field="field" />
      </tbody>
    </table>
    <label for="varietyToggle">External variety change:</label>
    <input type="number" v-model="field.varietyId" id="varietyToggle" min="1" max="3" />
  </div>
</template>

<script>
import FieldsTableRow from "./FieldsTableRow";

export default {
  name: "FieldsTable",
  data() {
    return {
      field: {
        id: 1327296,
        name: "BO_6542",
        hectares: 36.08,
        crop: "Corn",
        varietyId: 2,
        cloverPlanted: true,
        ecoCert: true,
        acidicSoil: false
      }
    };
  },
  components: {
    FieldsTableRow
  }
};
</script>
