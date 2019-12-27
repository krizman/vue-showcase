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

export default {
  name: "FieldsTable",
  data() {
    return {
      fields: {
        "1327296": {
          id: 1327296,
          name: "BO_6542",
          hectares: 36.08,
          crop: "Corn",
          varietyId: 2,
          cloverPlanted: true,
          ecoCert: true,
          acidicSoil: false
        },
        "1327297": {
          id: 1327297,
          name: "BO_6543",
          hectares: 3.08,
          crop: "Soy",
          varietyId: 1,
          cloverPlanted: true,
          ecoCert: true,
          acidicSoil: false
        },
        "1327298": {
          id: 1327298,
          name: "BO_6544",
          hectares: 4.08,
          crop: "Beans",
          varietyId: 3,
          cloverPlanted: false,
          ecoCert: true,
          acidicSoil: true
        }
      }
    };
  },
  components: {
    FieldsTableRow
  }
};
</script>
