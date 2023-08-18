<template>
    <nav>
        <div class="topnav">
            <router-link to="/"><span><img src="https://i.postimg.cc/prJPL7t3/Screenshot-2023-08-17-123327.png" alt=""></span></router-link>
            <router-link id="links" to="/register">Register</router-link>
            <router-link id="links" to="/login">Log In</router-link>
            <router-link id="links" to="/admin">Product Admin</router-link>
            <router-link id="links" to="/addproducts">Add Products</router-link>
            <router-link id="links" to="/products">Products</router-link>
            <router-link id="links" to="/">Home</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.topnav{
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 1.5%;
}
img{
    width: 170px;
    height: 100px;
    border: 4px dotted #EE4823;
    border-radius: 30px;
    padding: 2%;

}

#links{
    margin: 5px;
    text-decoration: none;
    color: black;
    padding: 0.5%;
    font-weight: 500;
    position: relative;
    font-family: 'Courier Prime', monospace;
    font-weight: bold;
    float: right;
}


#links::after{
    content: '';
    opacity: 0;
    transition: all 0.2s;
    height: 2px;
    width: 100%;
    background-color: green;
    position: absolute;
    bottom: 0;
    left: 0;
}

#links:hover::after{
    opacity: 1;
    
} 
</style>