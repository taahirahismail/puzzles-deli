<template>
<div>
    <router-link :to="{name: 'Create'}" class="button">Add new</router-link>
    <table>
        <thead>
            <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.productID">
                <td>{{product.productName}}</td>
                <td>{{product.Price}}</td>
                <td class="center"> 
                    <router-link :to="{name: 'Edit', params : { id: product.productID}}" class="button is-info is-small">Edit</router-link>
                    <a class="button is-danger is-small" @click="deleteProduct(product.productID)">Delete</a>
                </td>

            </tr>
        </tbody>
    </table>
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
import axios from "axios";

export default {
    // name: "ProductList", 
    // data(){
    //     return{
    //         products: [], 
    //     },
    // },

    // created(){
    //     this.getProducts(); 
    // },

    // methods:{
    //     // get all products
    //     async getProducts(){
    //         try{
    //             const response = await
    //         }
    //     }

    // }

    

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