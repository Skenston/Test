import {createStore} from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    authorized: false,
    authModalActive: false,
    cartModalActive: false,
    cart: [],
    totalCartPrice: 0,
    partners: [],
  },
  mutations: {
    setPartners(state, payload) {
      state.partners = payload.partners;
      for (let i = 0; i < state.partners.length; i++) {
        const productsKey = state.partners[i].products.split('.')[0];
        state.partners[i].products_array = payload[productsKey];
      }
    },
    setProducts(state, payload) {
      state.products[payload.key] = payload.data;
    },
    setAuthorized(state, payload) {
      state.authorized = payload
    },
    setAuthModalActive(state, payload) {
      state.authModalActive = payload
    },
    setCartModalActive(state, payload) {
      state.cartModalActive = payload
    },
    addToCart(state, payload) {
      const product = state.cart.find(item => item.id === payload.id);
      if (product) {
        product.count++;
      } else {
        state.cart.push({count: 1, ...payload});
      }

      state.totalCartPrice = state.cart.reduce((acc, item) => {
        return acc + item.count * item.price;
      }, 0);
    },
    removeFromCart(state, payload) {
      const product = state.cart.find(item => item.id === payload.id);
      if (product && product.count > 0) {
        product.count--;
      }

      state.totalCartPrice = state.cart.reduce((acc, item) => {
        return acc + item.count * item.price;
      }, 0);
    },
  },
  actions: {
    async fetchData({commit, state}) {
      if (state.partners.length) {
        return;
      }

      const response = await axios.get('/db/db.json');
      commit('setPartners', response.data.db);
    },
  },
})
