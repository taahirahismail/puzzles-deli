<template>
    <button>
        <router-link to="/product">Add product</router-link>
    </button><br>
    <table>
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody v-if="products">
            <ProductAdmin v-for="product of products" :key="product.productID" :product="product"/>
        </tbody>
        <tbody v-else>No Products to Display</tbody>
    </table>

</template>

<script>
import ProductAdmin from '@/components/Product-Admin-Comp.vue'; 
export default {
    components: {ProductAdmin}, 
    computed: {
        products(){
            return this.$store.state.products
        }    
    },
    mounted(){
        this.$store.dispatch("fetchProducts")
    }
}
</script>