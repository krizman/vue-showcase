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
        <option value="1" :selected="field.variety == 1">One</option>
        <option value="2" :selected="field.variety == 2">Two</option>
        <option value="3" :selected="field.variety == 3">Three</option>
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
      variety: String,
      cloverPlanted: Boolean,
      ecoCert: Boolean,
      acidicSoil: Boolean
    }
  }
};
</script>