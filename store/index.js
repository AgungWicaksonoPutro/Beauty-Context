import axios from 'axios'

export const state = () => ({
  url: '',
  error: [
    {
      error: true,
      message: 'Masukan Link Youtube(Pastikan Memiliki Subtitle) --> Tekan Enter atau Klik Tombol Arrow Right --> Masukan Kata Yang akan Kamu cari and Enjoy!'
    }
  ],
  subtitle: []
})

export const mutations = {
  setUrl (state, payload) {
    const path = /(youtube.com)+/gm
    if (!payload.match(path)) {
      state.error = [{ error: true, message: 'Masukan Link Youtube' }]
      state.url = ''
    } else {
      state.error = [{ error: false, message: '' }]
      state.url = payload.replace('watch?v=', 'embed/')
    }
  },
  setSubtitle (state, payload) {
    state.subtitle = payload
  }
}

export const actions = {
  getAllSubtitle (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(process.env.NUXT_ENV_API_URL + payload)
        .then((res) => {
          context.commit('setSubtitle', res.data)
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export const getters = {
  getUrl (state) {
    return state.url
  },
  getEror (state) {
    return state.error
  },
  getSubtitle (state) {
    return state.subtitle
  }
}
