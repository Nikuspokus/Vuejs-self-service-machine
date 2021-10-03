import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    // c'est la données elle-même
    products: []
  },
  mutations: {
    // 
    loadProducts(state, products) {
      console.log(products);
      state.products = products
    }
  },
  actions: {
    // peut être appelé à partir de n'importe quel composant
    loadProducts({ commit }) {
      axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        commit('loadProducts', response.data)
      })
    }
  },
  modules: {
    // 
  }
})
