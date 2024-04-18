<template>
<div class="home">
    <product-list />
</div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList.vue';

export default {
    name: 'HomeView',
    components: {
        'product-list': ProductList,
    }
}
</script>
