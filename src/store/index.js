import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    randomCounter: 0
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    randomCounterUp(state, randomNumber) {
      state.randomCounter += randomNumber
      console.log("randomNumber = " , randomNumber)
    },
    randomCounterDown(state, randomNumber) {
      console.log('randomNumber = ', randomNumber)
      state.randomCounter -= randomNumber
    }
  },
  actions: {
    randomUp({commit}) {
      axios('https://www.random.org/integers/?num=1&min=1&max=9&col=1&base=10&format=plain&rnd=new')
      .then(response => {
        console.log(response.data)
        commit('randomCounterUp', response.data)
      })
    },
    randomDown({commit}) {
      axios('https://www.random.org/integers/?num=1&min=1&max=9&col=1&base=10&format=plain&rnd=new')
      .then(response => {
        console.log(response.data)
        commit('randomCounterDown', response.data)
      })
    } 
  },
  getters: {

  },
  modules: {
  }
})
