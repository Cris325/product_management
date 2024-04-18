<template>
  <div id="app">
    <nav class="nav">
      <h1>Product Management</h1>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
.nav {
  background-color: #f8f9fa;
  padding: 10px 20px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav h1 {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
}
</style>