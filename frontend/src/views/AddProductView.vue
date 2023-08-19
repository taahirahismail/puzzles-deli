<template>
    <form>
        <label for="productName">Product Name</label>
        <input type="text" name="productName" id="productName" v-model="productName">
        <label for="productDesc">Product Description</label>
        <input type="text" name="productDesc" id="productDesc" v-model="productDesc">
        <label for="price">Price</label>
        <input type="number" name="price" id="price" v-model="price">
        <label for="img">Image</label>
        <input type="text" name="img" id="img" v-model="img">
        <button @click="addProduct">Add Product</button>
    </form>
    
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            productName: "", 
            productDesc: "",
            price: "", 
            img: ""
        }
    },

    methods: {
        async addProduct (){
            try{
                await axios.post('https://puzzles-deli-db.onrender.com/product', {
                    productName: this.productName, 
                    productDesc: this.productDesc, 
                    price: this.price,  
                    img: this.img
                })
                this.productName = ""
                this.productDesc = "" 
                this.price = ""
                this.img = ""
                this.$router.push('/admin')
            }
            catch(err){
                alert(err)
            }
        }
    }
}
</script>