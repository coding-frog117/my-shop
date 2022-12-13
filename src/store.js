import { configureStore } from '@reduxjs/toolkit';
import user from './store/userSlice';
import item from './store/itemSlice';

export default configureStore({
  reducer: {
    item: item.reducer,
    user: user.reducer

   } 

})   