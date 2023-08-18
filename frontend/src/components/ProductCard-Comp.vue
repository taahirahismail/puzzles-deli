<template>
    <!-- card on products page -->
<router-link :to="{ name: 'product', params: {id: product.id}}">
    <img src="product.img" alt="product.productName">
    <div>
        <h1>{{product.productName}}</h1>
        <p>{{product.productDesc}}</p>
        <p>{{product.price}}</p>
        <button>Add to cart</button>
    </div>
</router-link>

</template>

<script>
export default {
    props: ["product"]
}
</script>