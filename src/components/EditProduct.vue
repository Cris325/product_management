<template>
  <div>
    <h1>Edit Product</h1>
    <form @submit.prevent="updateProduct">
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
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      name: '',
      description: '',
      price: 0
    };
  },
  created() {
    this.fetchProduct();
  },
  methods: {
    fetchProduct() {
      const productIndex = this.$route.params.id;
      // Ensure the index is a number and within bounds
      if (isNaN(productIndex) || productIndex >= this.$store.state.products.length || productIndex < 0) {
        alert("Product not found.");
        this.$router.push('/');
        return;
      }
      const product = this.$store.state.products[productIndex];
      if (product) {
        this.id = productIndex;
        this.name = product.name;
        this.description = product.description;
        this.price = product.price;
      } else {
        this.$router.push('/');
      }
    },
    updateProduct() {
      const updatedProduct = {
        name: this.name,
        description: this.description,
        price: parseFloat(this.price)
      };
      this.$store.dispatch('updateProduct', { index: this.id, product: updatedProduct });
      this.$router.push('/');
    }
  }
};
</script>