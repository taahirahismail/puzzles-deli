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
        let{products} = await(await fetch("https://puzzles-deli-db.onrender.com/Products")).json()
        if(products){
          context.commit("setProducts", products)
        }
        else{alert("error")}
      }
      catch(e){
        console.error(e)
      }
    }
  },
})
