import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null,
  },
  mutations: {
    setProducts: (state, value) => {
      state.products = value;
    }
  },
  actions: {
    async fetchProducts (context){
      try{
        let products = await(await fetch("https://puzzles-deli-db.onrender.com/products/")).json()
        if(products){
          context.commit("setProducts", products)
        }
        else{alert("error")}
      }
      catch(e){
        console.error(e)
      }
    }, 

    async fetchProduct (context, id){
      try{
        let product = await(await fetch("https://puzzles-deli-db.onrender.com/product/" + id)).json()
        if(product){
          context.commit("setProduct", product)
        }
        else{alert("error")}
      }
      catch(e){
        console.error(e)
      }
    }
  },
})
