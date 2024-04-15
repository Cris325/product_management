<template>
  <div class="product-list">
    <div>
      <!-- Title -->
      <h1>Product List</h1> 
      <router-link to="/add">Add Product</router-link>
      <button @click="editProduct(index)">Edit</button>
      <button @click="deleteProduct(index)">Delete</button>
    </div>

    <table class="center-table">
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
      </tr>
      <tr v-for="(product, index) in products" :key="index" class="product">
        <td class="product-name">{{ product.name }}</td>
        <td class="product-description">{{ product.description }}</td>
        <td class="product-price">$ {{ product.price }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //List of products
      products: [
        { name: 'Vanilla', description: 'Classic flavor with sweet, smooth, and creamy taste.', price: 79 },
        { name: 'Chocolate', description: 'Rich and indulgent flavor with deep cocoa notes.', price: 79 },
        { name: 'Strawberry', description: 'Fruity, refreshing flavor with sweet, tangy taste.', price: 79 },
        { name: 'Mint Chocolate Chip', description: 'Cool mint ice cream with chocolate chips.', price: 89 },
        { name: 'Coffee', description: 'Rich, creamy ice cream with bold coffee flavor.', price: 89 },
        { name: 'Salted Caramel', description: 'Sweet caramel with a touch of salt.', price: 89 },
        { name: 'Cookies and Cream', description: 'Vanilla base with chocolate sandwich cookie chunks.', price: 99 },
        { name: 'Matcha', description: 'Green tea ice cream with smooth, earthy flavor and sweetness.', price: 99 },
        { name: 'Rocky Road', description: 'Chocolate ice cream with marshmallows and nuts.', price: 99 },
        { name: 'Pistachio', description: 'Nutty, slightly sweet flavor with subtle green hue.', price: 99 },
        { name: 'Dulce de Leche', description: 'Sweet, caramel-like ice cream with a rich, creamy texture.', price: 109 },
        { name: 'Gold Leaf Vanilla', description: 'Premium vanilla ice cream topped with edible gold leaf for a luxurious touch.', price: 109 },
      ]
    };
  }
};
</script>

<style scoped>
.center-table {
  margin: auto;
  border: 1px ;
  border-collapse: collapse;
}

table th {
  text-align: center;
  background-color: aquamarine;
  font-family:'Segoe UI';
  font-weight: bold;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
}

table td {
    text-align: center;
    background-color: pink;
    font-family: arial;
    font-weight: 300;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    
}

table td:hover {
  background-color: plum;
}
</style>
