<template>
  <div class="blank bg-gray-100 w-full h-full flex justify-center items-center">
    <div class="">
      <img v-if="data[0].message === 'Masukan Link Youtube'" class="w-1/6 mx-auto my-3 h-auto" src="../../assets/img/warning.png" alt="Image Launch">
      <img v-else class="w-1/6 mx-auto my-3 h-auto" src="../../assets/img/launch.png" alt="Image Launch">
      <div class="intruction flex justify-center">
        {{ data[0].message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlankSpace',
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
