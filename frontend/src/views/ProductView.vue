<template>
    <div v-if="product" class="product-details">
        <img :src="product.img" :alt="product.productName">
        <div>
            <h1>{{product.productName}}</h1>
            <p>{{product.productDesc}}</p>
            <p>{{product.price}}</p>
            <button>Add to cart</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["id"], 
    computed: {
        product(){
            return this.$store.state.property; 
        },
    },

    mounted(){
        this.$store.dispatch("getProduct", this.id); 
    }
}; 
</script>
    