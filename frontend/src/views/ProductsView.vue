<template>
 <div v-if="products">
    <ProductCard v-for="product of products" :key="product.productID" :product="product"/>
</div>
<div v-else>Loading Products</div> 
</template>

<script>

import ProductCard from '@/components/ProductCard-Comp.vue'

export default {
    computed: {
        products(){
            return this.$store.state.products;
        },
    },
    mounted(){
        this.$store.dispatch("fetchProducts")
    }
};
</script>