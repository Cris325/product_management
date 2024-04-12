<template>
  <div>
    <div v-for="product in products" :key="product.id">
      <Product :product="product" @edit="editProduct(product)" @delete="deleteProduct(product.id)"/>
    </div>
  </div>
</template>

<script>
import Product from './Product.vue';

export default {
  name: 'ProductList',
  props: ['products'],
  components: {
    Product
  },
  methods: {
    editProduct(product) {
      this.$emit('editProduct', product);
    },
    deleteProduct(productId) {
      if (confirm("Are you sure you want to delete this product?")) {
        this.$emit('deleteProduct', productId);
      }
    }
  }
};
</script>

