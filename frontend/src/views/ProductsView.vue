<template>
    <div>
        <div v-if="products">
        <div v-for="product of products" :key="product.productID">
            <div>
            <h1>{{ product.productName }}</h1>
            <p>{{ product.productDesc }}</p>
            <p>{{ product.price }}</p>
            </div>
        </div>
        </div>
        <div v-else>Loading Products</div>
    </div>
</template>

<script>

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