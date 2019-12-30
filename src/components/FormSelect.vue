<template>
  <form>
    <div class="form-group">
      <label for="seasonSelect">Season:</label>
      <select name="season" id="seasonSelect" class="form-control" @change="seasonChanged">
        <option disabled value>Select season...</option>
        <option v-for="season in seasons" :key="season" :value="season">{{ season }}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="regionSelect">Region:</label>
      <select name="region" id="regionSelect" class="form-control" @change="regionChanged">
        <option disabled value>Select region...</option>
        <option v-for="(region, id) in regions" :key="id" :value="id">{{ region.name }}</option>
      </select>
    </div>
  </form>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["seasons", "regions"])
  },
  methods: {
    seasonChanged(event) {
      this.$emit("season-change", event.target.value);
    },
    regionChanged(event) {
      this.$emit("region-change", event.target.value);
    }
  }
};
</script>