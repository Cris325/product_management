<template>
    <div>
      <h1>Product List</h1>
      <router-link to="/add">Add Product</router-link>
      <ul>
        <li v-for="(product, index) in products" :key="product.id">
          <div>
            <h3>Name: {{ product.name }}</h3>
            <p>Description: {{ product.description }}</p>
            <p>Price: {{ product.price }}</p>
            <button @click="editProduct(index)">Edit</button>
            <button @click="deleteProduct(index)">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        //Lists of products
        products: [
        { id: 1, name: 'Product 1', description: 'Description 1', price: 10.00 },
        { id: 2, name: 'Product 2', description: 'Description 2', price: 20.00 },
        ]
      };
    },
    created() {
      this.products = this.$store.state.products;
    },
    methods: {
        editProduct(index) {
            this.$router.push(`/edit/${index}`);
        },
      deleteProduct(index) {
        this.$store.dispatch('deleteProduct', index);
      }
    }
  };
  </script>
  