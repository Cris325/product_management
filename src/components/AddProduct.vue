<template>
    <br>
    <br>
    <div class="add-product">
      <form @submit.prevent="addProduct" class="form">
        <div class="form-group">
          <h1 class="title">Add Product</h1>
        </div>
        <div class="form-group">
          <label for="name" class="label">Name:</label>
          <input type="text" v-model="name" required class="input" />
        </div>
        <div class="form-group">
          <label for="description" class="label">Description:</label>
          <input type="text" v-model="description" required class="input" />
        </div>
        <div class="form-group">
          <label for="price" class="label">Price:</label>
          <input type="number" v-model="price" step="0.01" required class="input" />
        </div>
        <div class="form-group">
          <button type="submit" class="btn">Add</button>
        </div>
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
          price: parseFloat(this.price)
        };
        this.$store.dispatch('addProduct', newProduct);
        this.$router.push('/');
      }
    }
  };
  </script>
  
  <style scoped>

    .add-product {
      max-width: 400px;
      margin: auto;
      background-color: #c2e6fc;
      padding: 20px;
      border-radius: 10px;
    }
    
    .title {
      text-align: center;
      margin-bottom: 20px;
    }
    
    .form {
      display: flex;
      flex-direction: column;
    }
    
    .form-group {
      margin-bottom: 15px;
    }
    
    .label {
      font-weight: bold;
    }
    
    .input {
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
      width: 100%;
      box-sizing: border-box; /* Ensure padding is included in width */
    }
    
    .btn {
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      width: 100%;
      box-sizing: border-box; /* Ensure padding is included in width */
    }
    
    .btn:hover {
      background-color: #0056b3;
    }
    </style>
  
