import { createStore } from 'vuex'

export default createStore({
    state: {
        products: []
    },
    mutations: {
        addProduct(state, product) {
            state.products.push(product);
        },
        updateProduct(state, { index, product }) {
            state.products[index] = product;
        },
        deleteProduct(state, index) {
            state.products.splice(index, 1);
        }
    },
    actions: {
        addProduct({ commit }, product) {
            commit('addProduct', product);
        },
        updateProduct({ commit }, { index, product }) {
            commit('updateProduct', { index, product });
        },
        deleteProduct({ commit }, index) {
            commit('deleteProduct', index);
        }
    }
})