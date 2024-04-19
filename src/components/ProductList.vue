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
         <!-- Vue transition group that applies a transition effect -->
        <transition-group name="slide-fade"> 
            <tr v-for="(product, index) in products" :key="index" class="product">
                 <!-- defines table data cells -->
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
    <div class="add-container">
        <button @click="showAddForm" class="add-product">Add Product</button>
    </div>

    <!-- Add and Edit Product Form -->
    <transition name="fade" @after-enter="afterTransition" @after-leave="afterTransition">
        <div v-if="isAddingProduct || isEditingProduct" class="add-product-form">
            <div class="form-group">
                <div class="container">
                    <h1>{{ isEditingProduct ? 'Edit Product' : 'Add Product' }}</h1>
                </div>
            </div>

            <form @submit.prevent="isEditingProduct ? updateProduct() : addNewProduct()">
                <div class="form-group">
                    <label for="productName" class="label">Product Name:</label>
                    <input type="text" id="productName" class="input" v-model="formData.name" required>
                </div>
                <div class="form-group">
                    <label for="productDescription" class="label">Product Description:</label>
                    <textarea id="productDescription" class="input" v-model="formData.description" required></textarea>
                </div>
                <div class="form-group">
                    <label for="productPrice" class="label">Product Price:</label>
                    <input type="number" id="productPrice" class="input" v-model.number="formData.price" required>
                </div>
                <div class="buttons">
                    <button type="submit" class="btn">{{ isEditingProduct ? 'Update' : 'Add' }}</button>
                    <button type="button" class="btn" @click="cancelAction">{{ isEditingProduct ? 'Cancel Edit' : 'Cancel Add' }}</button>
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
        showAddForm() {
            this.isAddingProduct = true;
        },
        editProduct(index) {
            this.isEditingProduct = true;
            this.formData = {
                ...this.products[index]
            };
            this.editedIndex = index;
        },
        confirmDelete(index) {
            if (confirm('Are you sure you want to delete this product?')) {
                this.deleteProduct(index);
            }
        },
        addNewProduct() {
            this.$store.dispatch('addProduct', this.formData);
            this.cancelAction();
        },
        updateProduct() {
            this.$store.dispatch('updateProduct', {
                index: this.editedIndex,
                product: this.formData
            });
            this.cancelAction();
        },
        cancelAction() {
            this.isAddingProduct = false;
            this.isEditingProduct = false;
            this.resetForm();
        },
        resetForm() {
            this.formData = {
                name: '',
                description: '',
                price: null,
            };
            this.editedIndex = null;
        },
        afterTransition() {
            if (!this.isAddingProduct && !this.isEditingProduct) {
                this.resetForm();
            }
        },
        deleteProduct(index) {
            this.$store.dispatch('deleteProduct', index);
        },
    },
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
        background-color: #2c8350; /* button hover */
    }
    
    .add-container {
        text-align: center;
    }
    
    .center-table {
    margin: auto;
    border-collapse: collapse;
    min-width: 50%;
    border: 1px solid black; /* Add border to the entire table */
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
    border: 1px solid black; /* Add border to table headers */
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
    border: 1px solid black; /* Add border to table cells */
}

table td:hover {
    background-color: rgb(187, 207, 209); /* table hover */
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
        margin: auto;
        background-color: rgb(219, 243, 245);
        padding: 20px;
        border-radius: 10px;
    }
    
    .container {
        max-width: 200px;
        margin: auto;
        background-color: aquamarine;
        padding: 10px;
        border-radius: 5px;
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
        box-sizing: border-box;  /* Ensure padding is included in width */
    }
    
    .btn {
        font-size: 16px;
        padding: 10px 20px;
        background-color: #32c06d;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        width: 100%;
        box-sizing: border-box;
        margin-bottom: 10px;   /* Ensure padding is included in width */
    }
    
    .btn:hover {
        background-color: #2c8350; /* button hover */
    }
    
    .slide-fade-enter-active {
      transition: all 0.3s ease-out;
    }
    
    .slide-fade-leave-active {
      transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }
    
    .slide-fade-enter-from,
    .slide-fade-leave-to {
      transform: translateX(20px);
      opacity: 0;
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
