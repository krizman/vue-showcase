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
  data() {
    return {
      varieties: [
        {
          id: 1,
          value: "Ruderalis"
        },
        {
          id: 2,
          value: "Pine cone"
        },
        {
          id: 3,
          value: "Short Joe"
        }
      ]
    };
  },
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
  }
};
</script>