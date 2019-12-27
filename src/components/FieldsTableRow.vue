<template>
  <tr>
    <th scope="row">
      <strong>{{ field.name }}</strong>
      <br />
      <span># {{ field.id }}</span>
    </th>
    <td>{{ field.hectares }}</td>
    <td>{{ field.crop }}</td>
    <td>{{ field.variety }}</td>
    <td>{{ field.cloverPlanted }}</td>
    <td>{{ field.ecoCert }}</td>
    <td>{{ field.acidicSoil}}</td>
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
      variety: String,
      cloverPlanted: Boolean,
      ecoCert: Boolean,
      acidicSoil: Boolean
    }
  }
};
</script>