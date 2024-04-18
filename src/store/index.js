import { createStore } from 'vuex'

export default createStore({
    state: {
        products: [{
                name: 'Vanilla',
                description: 'Classic flavor with sweet, smooth, and creamy taste.',
                price: 79
            },
            {
                name: 'Chocolate',
                description: 'Rich and indulgent flavor with deep cocoa notes.',
                price: 79
            },
            {
                name: 'Strawberry',
                description: 'Fruity, refreshing flavor with sweet, tangy taste.',
                price: 79
            },
            {
                name: 'Mint Chocolate Chip',
                description: 'Cool mint ice cream with chocolate chips.',
                price: 89
            },
            {
                name: 'Coffee',
                description: 'Rich, creamy ice cream with bold coffee flavor.',
                price: 89
            },
            {
                name: 'Salted Caramel',
                description: 'Sweet caramel with a touch of salt.',
                price: 89
            },
            {
                name: 'Cookies and Cream',
                description: 'Vanilla base with chocolate sandwich cookie chunks.',
                price: 99
            },
            {
                name: 'Matcha',
                description: 'Green tea ice cream with smooth, earthy flavor and sweetness.',
                price: 99
            },
            {
                name: 'Rocky Road',
                description: 'Chocolate ice cream with marshmallows and nuts.',
                price: 99
            },
            {
                name: 'Pistachio',
                description: 'Nutty, slightly sweet flavor with subtle green hue.',
                price: 99
            },
            {
                name: 'Dulce de Leche',
                description: 'Sweet, caramel-like ice cream with a rich, creamy texture.',
                price: 109
            },
            {
                name: 'Gold Leaf Vanilla',
                description: 'Premium vanilla ice cream topped with edible gold leaf for a luxurious touch.',
                price: 109
            }
        ]
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