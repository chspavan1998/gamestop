import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './gamesSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    games: gamesReducer,
    cart: cartReducer,
  },
});

export default store; 