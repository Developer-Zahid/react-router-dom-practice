import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartProductAmount: 0,
        cartArray: [],
    },
    reducers: {
        addToCart: (state, action)=> {
            let newCartItem = {}
            newCartItem.id = action.payload.id
            newCartItem.quantity = action.payload.quantity
            let isProductIdExist = state.cartArray.some((element) => element.id === action.payload.id)
            if(!isProductIdExist){
                state.cartProductAmount += action.payload.quantity
            }else{
                return
            }
            state.cartArray.push(newCartItem)
        }
    }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer