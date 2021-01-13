<template>
  <nav class="container h-20 bg-gray-800 flex items-center sticky-top">
    <div class="navbar-brand mx-3 w-2/12">
      <nuxt-link class="hover:no-underline hover:text-current" to="/">
        <span class="text-blue-600 text-3xl">Beauty&nbsp;</span><span class="text-white text-3xl">Context</span>
      </nuxt-link>
    </div>
    <div class="input-container w-5/12 mx-2 relative z-10">
      <button class="absolute top-2 right-2 focus:outline-none text-gray-400 hover:text-gray-500 focus:text-gray-500" @click.prevent="setVideo">
        <BIconArrowRight />
      </button>
      <input v-model="url" class="bg-white shadow-sm w-full h-10 rounded-lg pr-8 pl-2 focus:outline-none focus:ring-1" placeholder="Enter your url" type="text" @keyup.enter.prevent="setVideo">
    </div>
    <transition name="on">
      <div v-show="getUrl.length && url.length" class="input-container w-1/6 relative z-0">
        <button class="absolute top-2 right-2 focus:outline-none text-gray-400 hover:text-gray-500 focus:text-gray-500">
          <BIconSearch />
        </button>
        <input
          v-model="key"
          class="bg-white shadow-sm w-full h-10 rounded-lg pr-8 pl-2 focus:outline-none focus:ring-1"
          placeholder="Enter your key"
          type="text"
          @keyup.enter.prevent="searchSubtitle"
        >
      </div>
    </transition>
  </nav>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  name: 'Navbar',
  data () {
    return {
      url: '',
      key: '',
      setKey: false,
      tes: ''
    }
  },
  computed: {
    ...mapGetters(['getUrl'])
  },
  methods: {
    ...mapMutations(['setUrl']),
    ...mapActions(['getAllSubtitle']),
    setVideo () {
      this.setKey = true
      this.setUrl(this.url)
    },
    searchSubtitle () {
      const url = `search?url=${this.url}&q=${this.key}&marked=0`
      this.getAllSubtitle(url)
    }
  }
}
</script>

<style scoped>
.on-enter-active, .on-leave-active {
     transition: all 0.6s;
}
.on-enter, .on-leave-active {
     opacity: 0;
}
.on-enter {
     transform: translateX(-31px);
}
.on-leave-active {
     transform: translateX(31px);
}
.on-enter-active, .on-leave-active {
     transition: all 1s;
}
.on-enter, .on-leave-to {
     opacity: 0;
     transform: translateX(-30px);
}
</style>
