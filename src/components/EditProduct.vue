<template>
  <div>
    <h1>Update Product</h1>
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
      name: '',
      description: '',
      price: 0
    };
  },
  created() {
    const productIndex = this.$route.params.id;
    const product = this.$store.state.products[productIndex];
    this.name = product.name;
    this.description = product.description;
    this.price = product.price;
  },
  methods: {
    updateProduct() {
      const productIndex = this.$route.params.id;
      const updatedProduct = {
        name: this.name,
        description: this.description,
        price: parseFloat(this.price)
      };
      this.$store.dispatch('updateProduct', { index: productIndex, product: updatedProduct });
      this.$router.push('/');
    }
  }
};
</script>
