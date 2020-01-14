import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiKey: process.env.VUE_APP_API_KEY,
    apiUrl: process.env.VUE_APP_API_BASE,
    weather: '',
    temp: '',
    location: '',
    condition: '',
    query: ''
  },
  getters: {
  },

  mutations: {
    fetchWeather(state) {
      axios.get(`${state.apiUrl}q=${state.query}&appid=${state.apiKey}`)
      .then(res => {
        state.weather = res.data;
        state.condition = res.data['weather'][0]['main'];
        state.temp = res.data['main']['temp'];
        state.location = state.weather['name'] + ',' + state.weather['sys']['country'];
      })
      .catch(() => {
        alert('Please check your input and try again')
      });
    },

    updateQuery(state, payload) {
      state.query = payload;
    },
  },

  actions: {
    requestWeather({ commit }) {
      commit('fetchWeather');
    },

    patchQuery({ commit }, payload) {
      commit('updateQuery', payload)
    }
  },

  modules: {
  }
})
