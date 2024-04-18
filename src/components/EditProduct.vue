<template>
<br>
<br>
<div class="edit-product">
    <transition name="zoom">
        <form @submit.prevent="editProduct" class="form">
            <div class="form-group">
                <div class="container">
                    <h1 class="title">Edit Product</h1>
                </div>
            </div>

            <!-- encapsulating textfields in a div with same class name for optimized configuration of the user interface  -->
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
                <input type="number" v-model="price" required class="input" />
            </div>

            <!-- encapsulating buttons in a div for an organized designing  -->
            <div class="form-group">
            <button type="submit" class="btn">Update</button>
            <button type="button" class="btn cancel-btn" @click="cancelEdit">Cancel</button>
            </div>
        </form>

        <!-- improvising transition of each in every action on the EditProduct page for more interactive actions  -->
    </transition>
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
            var productIndex = this.$route.params.id;
            //checking if the item selected is present on the list of Id
            if (isNaN(productIndex) || productIndex >= this.$store.state.products.length || productIndex < 0) {
                alert("Product not found.");
                this.$router.push('/');
                return;
            }

            //getting the data of selected product
            var product = this.$store.state.products[productIndex];
            if (product) {
                this.id = productIndex;
                this.name = product.name;
                this.description = product.description;
                this.price = product.price;
            } else {
                this.$router.push('/');
            }
        },
        //setting the updated product data
        editProduct() {
            var updatedProduct = {
                name: this.name,
                description: this.description,
                price: parseFloat(this.price)
            };

            //avoiding invalid input data
            if (!updatedProduct.name || !updatedProduct.description || isNaN(updatedProduct.price) || updatedProduct.price < 0) {
                alert('Please enter valid product details.');
                return;
            }

            this.$store.dispatch('updateProduct', {
                index: this.id,
                product: updatedProduct
            });
            this.$router.push('/');
        },
        cancelEdit() {
            this.$router.push('/');
        }
    }
};
</script>

<style scoped>

.edit-product {
    max-width: 400px;
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
    box-sizing: border-box;
    /* Ensure padding is included in width */
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
    margin-bottom: 10px;
    /* Ensure padding is included in width */
}

.btn:hover {
    background-color: #2c8350;
}
.zoom-enter-active,
.zoom-leave-active {
    transition: transform 0.5s, opacity 0.5s;
}

.zoom-enter,
.zoom-leave-to {
    opacity: 0;
    transform: scale(0.8);
}
</style>
