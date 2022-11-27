import { configureStore } from '@reduxjs/toolkit'
import counterReducerFromCounterSlice from '../slices/counter/counterSlice'

export default configureStore({
    reducer: {
        allCounterActions : counterReducerFromCounterSlice,
    }
})