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

// depuis notre composant on appel une action via la methode de propagation dispatch, 
// cette action charge les données de l'api et appel une mutation via la methode commit, 
// la mutation va modifier l'état, 
// une fois l'état modifier les composant qui utilisent l'état vont être mis à jour