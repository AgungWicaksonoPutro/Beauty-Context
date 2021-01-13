/* eslint-disable vue/no-v-html */
<template>
  <div class="pt-3">
    <div class="bg-gray-300 h-auto rounded-md px-2 py-1 flex">
      <div class="subtitle w-9/12">
        {{ data.text }}
      </div>
      <div class="button w-3/12 flex justify-center items-center">
        <button class="bg-blue-300 w-full rounded-md p-1 shadow-sm">
          {{ setTime(data.start) }} - {{ setTime(data.end) }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListSubtitle',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    setTime (a) {
      let hours = Math.floor(a / 3600)
      let minutes = Math.floor((a - (hours * 3600)) / 60)
      let seconds = a - (hours * 3600) - (minutes * 60)

      if (hours < 10) { hours = '0' + hours }
      if (minutes < 10) { minutes = '0' + minutes }
      if (seconds < 10) { seconds = '0' + seconds }
      return hours + ':' + minutes + ':' + seconds
    }
  }
}
</script>

<style scoped>

</style>
