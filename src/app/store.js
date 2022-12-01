import { configureStore } from '@reduxjs/toolkit'
import counterReducerFromCounterSlice from '../slices/counter/counterSlice'
import cartReducerFromCartSlice from '../slices/cart/cartSlice'

export default configureStore({
    reducer: {
        allCounterActions : counterReducerFromCounterSlice,
        allCartActions : cartReducerFromCartSlice,
    }
})