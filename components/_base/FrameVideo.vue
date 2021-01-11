<template>
  <div class="p-3">
    <iframe class="w-full h-96 rounded-sm" :src="getUrl" frameborder="0" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'FrameVideo',
  computed: {
    ...mapGetters(['getUrl'])
  }
}
</script>

<style scoped>

</style>
