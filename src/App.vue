<template>
  <div id="app">
    <FormSelect @season-change="seasonChanged" @region-change="regionChanged" />
    <FieldsTable :seasonId="seasonId" :regionId="regionId" />
  </div>
</template>

<script>
import FormSelect from "./components/FormSelect.vue";
import FieldsTable from "./components/FieldsTable.vue";

export default {
  name: "app",
  data() {
    return {
      seasonId: "2019",
      regionId: "1"
    };
  },
  components: {
    FormSelect,
    FieldsTable
  },
  methods: {
    seasonChanged(seasonId) {
      this.seasonId = seasonId;
    },
    regionChanged(regionId) {
      this.regionId = regionId;
    }
  }
};
</script>