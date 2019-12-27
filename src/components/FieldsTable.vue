<template>
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
      <FieldTableRow :field="field"></FieldTableRow>
    </tbody>
  </table>
</template>

<script>
import FieldTableRow from "./FieldTableRow";

export default {
  name: "FieldsTable",
  data() {
    return {
      field: {
        id: 1327296,
        name: "BO_6542",
        hectares: 36.08,
        crop: "Corn",
        variety: "Organic corn",
        cloverPlanted: true,
        ecoCert: true,
        acidicSoild: false
      }
    };
  },
  props: {
    msg: String
  },
  components: {
    FieldTableRow
  }
};
</script>
