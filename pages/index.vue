<template>
  <div class="h-screen bg-white">
    <BlankSpace v-show="getEror[0].error" :data="getEror" />
    <div v-show="getUrl.length !== 0" class="grid grid-cols-2 gap-1">
      <div class="">
        <FrameVideo />
      </div>
      <div class="">
        <ListSubtitle v-for="(subtitle, index) in getSubtitle.data" :key="index" :data="subtitle" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BlankSpace from '../components/_base/BlankSpace'
import FrameVideo from '../components/_base/FrameVideo'
import ListSubtitle from '../components/_base/ListSubtitle'
export default {
  name: 'Index',
  components: {
    BlankSpace,
    FrameVideo,
    ListSubtitle
  },
  computed: {
    ...mapGetters(['getUrl', 'getEror', 'getSubtitle'])
  },
  head () {
    return {
      title: 'Dashboard Beauty Context',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This Beauty Context'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
