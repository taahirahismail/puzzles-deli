<template>
    <tr>
        <td><img src="product.img" alt="product.productName"></td>
        <td>{{product.productName}}</td>
        <td>{{product.productDesc}}</td>
        <td>{{product.price}}</td>
        <td>
            <div>
                <router-link :to="{name: 'edit products',params:{id: product.productID}}" >
                    <button>Edit</button>
                </router-link>
                <button @click="deleteProduct(product.productID)">
                    Delete
                </button>
            </div>
        </td>
    </tr>
</template>
<script>
import axios from 'axios'
export default {
    props: ["product"], 

    methods: {
        async deleteProduct(id){
            try{
                await axios.delete(`https://puzzles-deli-db.onrender.com/product/${id}`)
                this.$store.dispatch("fetchProduct")
                window.location.reload();
            }
            catch(err){
                alert(err)
            }
        }
    }
};
</script>