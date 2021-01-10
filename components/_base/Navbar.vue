<template>
  <nav class="container h-20 bg-gray-800 flex items-center sticky">
    <div class="navbar-brand mx-3 w-2/12">
      <nuxt-link class="hover:no-underline hover:text-current" to="/">
        <span class="text-blue-600 text-3xl">Beauty&nbsp;</span><span class="text-white text-3xl">Context</span>
      </nuxt-link>
    </div>
    <div class="input-container w-5/12 relative">
      <button class="absolute top-2 right-2 focus:outline-none text-gray-400 hover:text-gray-500 focus:text-gray-500">
        <BIconSearch />
      </button>
      <input v-model="url" class="bg-white shadow-sm w-full h-10 rounded-lg pr-8 pl-2 focus:outline-none focus:ring-1" placeholder="Enter your url" type="text">
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      url: ''
    }
  }
}
</script>

<style scoped>

</style>
