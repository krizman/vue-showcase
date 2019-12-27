<template>
  <table class="table table-striped">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Field</th>
        <th scope="">Hectares</th>
        <th scope="col">Crop (season 2020)</th>
        <th scope="col">Variety</th>
        <th scope="col">Clover planted</th>
        <th scope="col">Eco cert.</th>
        <th scope="col">Acidic soil</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">
          <strong>BO_6542</strong>
          <br>
          <span># 1327296</span>
        </th>
        <td>36.08</td>
        <td>Corn</td>
        <td>Organic</td>
        <td>Yes</td>
        <td>Yes</td>
        <td>No</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'FieldsTable',
  props: {
    msg: String
  }
}
</script>
