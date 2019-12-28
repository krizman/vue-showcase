<template>
  <tr>
    <th scope="row">
      <strong>{{ field.name }}</strong>
      <br />
      <span># {{ field.id }}</span>
    </th>
    <td>{{ field.hectares }}</td>
    <td>{{ field.crop }}</td>
    <td>
      <select class="form-control">
        <option
          v-for="variety in varieties"
          :key="variety.id"
          :value="variety.id"
          :selected="field.varietyId == variety.id"
        >{{ variety.value }}</option>
      </select>
    </td>
    <td>{{ field.cloverPlanted | preetyBool }}</td>
    <td>{{ field.ecoCert | preetyBool }}</td>
    <td>{{ field.acidicSoil | preetyBool }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    field: {
      id: Number,
      name: String,
      hectares: Number,
      crop: String,
      varietyId: Number,
      cloverPlanted: Boolean,
      ecoCert: Boolean,
      acidicSoil: Boolean
    }
  },
  computed: {
    varieties() {
      return this.$store.state.varieties;
    }
  }
};
</script>