
import axios from 'axios'
import { createStore } from 'vuex'



export default createStore({
  state: {
    products:[],
  },
  
  mutations: {
    setProducts:(state,products)=>{
      state.products = products
    },

  },
  actions: {
    getProducts({commit}){
      
      return axios.get(`http://localhost:8000/lessons`)
      .then((response)=>{
       
        commit('setProducts',response.data);
        
        console.log(response.data)
        
      })
      .catch((er)=>{
        console.log(er)
      })
    },
    
   

   getProductsLength({commit},params){
      const {brand} = params
     
      return axios.get('http://localhost:8000/products',{
        params:{
          brand:brand
        }
      })
      .then((respon)=>{
        commit(mutations.SET_PRODUCTS_LENGTH,respon.data);
        
        console.log(respon.data)
      })
    },

    
  
  },
  getters: {
    PRODUCTS(state){
      return state.products
    },
    PAGES(state){
      return state.products_count     
    },

   
  },
  modules: { 
  }
})
