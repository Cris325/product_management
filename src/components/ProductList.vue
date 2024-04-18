<template>
  <div class="product-list">
    <div>
      <!-- Title -->
      <h1>Product List</h1>
    </div>

    <table class="center-table">
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th colspan="2">Action</th>
      </tr>
      <transition-group name="fade">
        <tr v-for="(product, index) in products" :key="index" class="product">
          <td class="product-name">{{ product.name }}</td>
          <td class="product-description">{{ product.description }}</td>
          <td class="product-price">$ {{ product.price }}</td>
          <td><button @click="editProduct(index)" class="edit-product">Edit</button></td>
          <td><button @click="confirmDelete(index)" class="delete-product">Delete</button></td>
        </tr>
      </transition-group>
    </table>
    <br>
    <br>
    <div class="container">
      <button @click="showAddForm" class="add-product">Add Product</button>
    </div>

    <!-- Add Product Form -->
    <transition name="fade" @after-enter="afterTransition" @after-leave="afterTransition">
      <div v-if="isAddingProduct || isEditingProduct" class="add-product-form">
        <h2>{{ isEditingProduct ? 'Edit Product' : 'Add Product' }}</h2>
        <form @submit.prevent="isEditingProduct ? updateProduct() : addNewProduct()">
          <div>
            <label for="productName">Product Name:</label>
            <input type="text" id="productName" v-model="formData.name" required>
          </div>
          <div>
            <label for="productDescription">Product Description:</label>
            <textarea id="productDescription" v-model="formData.description" required></textarea>
          </div>
          <div>
            <label for="productPrice">Product Price:</label>
            <input type="number" id="productPrice" v-model.number="formData.price" required>
          </div>
          <div class="buttons">
            <button type="submit">{{ isEditingProduct ? 'Update' : 'Add' }}</button>
            <button type="button" @click="cancelAction">{{ isEditingProduct ? 'Cancel Edit' : 'Cancel Add' }}</button>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      isAddingProduct: false,
      isEditingProduct: false,
      formData: {
        name: '',
        description: '',
        price: null
      },
      editedIndex: null
    };
  },
  created() {
    this.products = this.$store.state.products;
  },
  methods: {
    addProduct() {
      this.$router.push('/add');
    },
    editProduct(index) {
      this.isEditingProduct = true;
      this.formData = {...this.products[index]};
      this.editedIndex = index;
    },
    confirmDelete(index) {
      if (confirm('Are you sure you want to delete this product?')) {
        this.deleteProduct(index);
      }
    },
    deleteProduct(index) {
      this.$store.dispatch('deleteProduct', index);
    },
    showAddForm() {
      this.isAddingProduct = true;
    },
    addNewProduct() {
      if (this.formData.name && this.formData.description && this.formData.price) {
        this.products.push({...this.formData});
        // Delay setting isAddingProduct to false until after transition
        setTimeout(() => {
          this.isAddingProduct = false;
        }, 500); // Adjust the timeout to match your transition duration
        this.resetForm();
      } else {
        alert('Please fill in all fields.');
      }
    },
    updateProduct() {
      if (this.formData.name && this.formData.description && this.formData.price) {
        this.products.splice(this.editedIndex, 1, {...this.formData});
        // Delay setting isEditingProduct to false until after transition
        setTimeout(() => {
          this.isEditingProduct = false;
        }, 500); // Adjust the timeout to match your transition duration
        this.resetForm();
      } else {
        alert('Please fill in all fields.');
      }
    },
    cancelAction() {
      this.isAddingProduct = false;
      this.isEditingProduct = false;
      this.resetForm();
    },
    resetForm() {
      this.formData = { name: '', description: '', price: null };
      this.editedIndex = null;
    },
    afterTransition() {
      // Clear form data if transition is complete
      if (!this.isAddingProduct && !this.isEditingProduct) {
        this.resetForm();
      }
    }
  }
};
</script>

<style scoped>

h1 {
    text-align: center;
    font-weight: bold;
}

button {
    background-color: #32c06d;
    border: white;
    color: white;
    padding: 8px 15px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;

}

button:hover {
    background-color: #2c8350;
}

.container {
  text-align: center;
}

.center-table {
    margin: auto;
    border: 1px;
    border-collapse: collapse;
    min-width: 50%;
}

table th {
    text-align: center;
    background-color: aquamarine;
    font-family: 'Segoe UI';
    font-weight: bold;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 12px;
    padding-bottom: 12px;
}

table td {
    text-align: center;
    background-color: rgb(219, 243, 245);
    font-family: arial;
    font-weight: 300;       
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;

}

table td:hover {
    background-color: rgb(187, 207, 209);
}

.product-name,
.product-description {
    text-align: center;
}

.product-price {
    text-align: right;
}

.add-product-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.add-product-form h2 {
  text-align: center;
}

.add-product-form form {
  display: flex;
  flex-direction: column;
}

.add-product-form form div {
  margin-bottom: 10px;
}

.add-product-form form div label {
  font-weight: bold;
}

.add-product-form form div input,
.add-product-form form div textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.add-product-form form .buttons {
  display: flex;
  justify-content: space-between;
}

.add-product-form form .buttons button {
  padding: 8px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.add-product-form form .buttons button[type="submit"] {
  background-color: #32c06d;
  color: #fff;
}

.add-product-form form .buttons button[type="submit"]:hover {
  background-color: #2c8350;
}

.add-product-form form .buttons button[type="button"] {
  background-color: #ccc;
  color: #333;
}

.add-product-form form .buttons button[type="button"]:hover {
  background-color: #bbb;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
