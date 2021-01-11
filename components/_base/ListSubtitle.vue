/* eslint-disable vue/no-v-html */
<template>
  <div class="pt-3">
    <div class="bg-gray-100 h-auto rounded-md px-2 py-1 flex">
      <div class="subtitle w-11/12">
        {{ data.text }}
      </div>
      <div class="button">
        <button class="bg-blue-200">
          {{ $moment(data.start).format('s') }} - {{ $moment(data.end).format('s') }}
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
      const time = new Date()
      time.setMinutes(a)
    }
  }
}
</script>

<style scoped>

</style>
