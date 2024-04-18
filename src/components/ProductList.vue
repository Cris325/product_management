<template>
<div class="product-list">
    <div>
        <!-- Title -->
        <h1>Product List</h1>
        <!-- Add, Edit, Delete Button -->
       
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
        <button @click="addProduct" class="add-product">Add Product</button>
    </div>
           
</div>
</template>

<script>
export default {
    data() {
        return {
            //List of products
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
                },
            ]
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
            this.$router.push(`/edit/${index}`);
        },
        confirmDelete(index) {
            if (confirm('Are you sure you want to delete this product?')) {
                this.deleteProduct(index);
            }
        },
        deleteProduct(index) {
            this.$store.dispatch('deleteProduct', index);
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

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
