import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	num:0
  },
  mutations: {
  	addPrice(state, price) {
  		state.num += +price
  	},
  	reducePrice(state, price) {
  		state.num -= price
  	}
  },
  actions: {

  }
})
