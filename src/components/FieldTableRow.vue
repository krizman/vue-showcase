<template>
  <tr>
    <th scope="row">
      <strong>{{ field.name }}</strong>
      <br />
      <span># 1327296</span>
    </th>
    <td>36.08</td>
    <td>Corn</td>
    <td>Organic</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>No</td>
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
      acidicSoild: Boolean
    }
  }
};
</script>