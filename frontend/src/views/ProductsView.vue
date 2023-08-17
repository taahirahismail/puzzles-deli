<template>
<div>
    <router-link :to="{name: 'Create'}" class="button">Add new</router-link>
</div>

<!-- <div v-if="products">
    <div v-for="product of products" :key="product.productID" :product="product">
        <div>
            {{product.productName}}
            {{product.productDesc}}
            {{product.price}}
        </div>
    </div>
</div>
<div v-else>Loading Products</div> -->
</template>

<script>
export default {
    computed: {
        projects(){
            return this.$store.state.products;
        },
    },
    mounted(){
        this.$store.dispatch("fetchProducts")
    }
};
</script>