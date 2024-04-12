<template>
    <div>
      <h1>Add Product</h1>
      <form @submit.prevent="addProduct">
        <div>
          <label for="name">Name:</label>
          <input type="text" v-model="name" required />
        </div>
        <div>
          <label for="description">Description:</label>
          <input type="text" v-model="description" required />
        </div>
        <div>
          <label for="price">Price:</label>
          <input type="number" v-model="price" required />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        description: '',
        price: 0
      };
    },
    methods: {
      addProduct() {
        const newProduct = {
          name: this.name,
          description: this.description,
          price: this.price
        };
        this.$store.dispatch('addProduct', newProduct);
        this.$router.push('/');
      }
    }
  };
  </script>
  