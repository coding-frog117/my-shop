import { configureStore, createSlice } from '@reduxjs/toolkit'


let item=createSlice({
    name: 'item',
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ]
    } 
)  

let user=createSlice({
    name: 'user',
    initialState: {name : 'kim',age: 20}, 
    reducers: {
        changeName(state){
            state.name='park'
        },
        changeAge(state, a){
            state.age=state.age+a.payload
        }
        
    }
})

export let { changeName, changeAge }=user.actions 
  
export default configureStore({
  reducer: {
    item: item.reducer,
    user: user.reducer

   } 

}) 