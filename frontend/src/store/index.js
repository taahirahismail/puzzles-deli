import { createStore } from 'vuex'
export default createStore({
  state: {
    products: null,
    product: null,
  },
  mutations: {
    setProducts: (state, value) => {
      state.products = value;
    },

    setProduct: (state, value) => {
      state.products = value;
    }
  },
  actions: {
    async fetchProducts (context){
      try{
        let {results} = await(await fetch("https://puzzles-deli-db.onrender.com/products/")).json()
        if(results){
          context.commit("setProducts", results)
        }
        else{alert("error")}
      }
      catch(e){
        console.error(e)
      }
    }, 

    async fetchProduct (context, id){
      try{
        let {result} = await(await fetch("https://puzzles-deli-db.onrender.com/product/" + id)).json()
        if(result){
          context.commit("setProduct", result)
        }
        else{alert("error")}
      }
      catch(e){
        console.error(e)
      }
    }
  },
})
