import { createStore } from "vuex" 

const store = createStore({
   state: {
      isLoading: false,
      isError: false
    },
   mutations:{
       loading(state, value) {
         state.isLoading = value
       },
       showwError(state, value) {
         state.isError = value
       },
   }
   
})

export default store
