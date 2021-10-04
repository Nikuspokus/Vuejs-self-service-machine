import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    // c'est la données elle-même
    products: [],
    productsInBag: []
  },
  mutations: {
    // 
    loadProducts(state, products) {
      state.products = products
    },
    addToBag(state, product) {
      state.productsInBag.push(product)
    }
  },
  actions: {
    loadProducts({ commit }) {
      axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        commit('loadProducts', response.data)
      })
    },

    addToBag({commit}, product) {
      commit('addToBag', product)      
    }
  },
  modules: {
    // 
  }
})

// depuis notre composant on appel une action via la methode de propagation dispatch, 
// cette action charge les données de l'api et appel une mutation via la methode commit, 
// la mutation va modifier l'état, 
// une fois l'état modifier les composant qui utilisent l'état vont être mis à jour