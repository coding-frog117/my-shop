import {createSlice} from '@reduxjs/toolkit';

let item=createSlice({
    name: 'item',
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ]
      ,
      increaseCount(state){
        state.count=state.count+1;
    
    } 
  })  
export let {increaseCount}=item.actions;

export default item;