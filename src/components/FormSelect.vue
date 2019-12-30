<template>
  <form>
    <div class="form-group">
      <label for="seasonSelect">Season:</label>
      <select name="season" id="seasonSelect" class="form-control">
        <option v-for="season in seasons" :key="season" :value="season">{{ season }}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="regionSelect">Region:</label>
      <select name="region" id="regionSelect" class="form-control">
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
  }
};
</script>