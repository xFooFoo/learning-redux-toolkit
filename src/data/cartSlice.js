import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartProductIds: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartProductIds = [...state.cartProductIds, action.payload]
        },
        removeFromCart: (state, action) => {
            const indexOfIdToRemove = state.cartProductIds.indexOf(action.payload)
            if (indexOfIdToRemove !== -1) {
                state.cartProductIds.splice(indexOfIdToRemove, 1)
            }
        },
        clearAllProducts: (state) => {
            state.cartProductIds = []
        }
    }
})

const { actions: cartActions, reducer: cartReducer } = cartSlice
export default cartSlice