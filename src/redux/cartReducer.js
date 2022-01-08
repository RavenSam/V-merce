const initialState = {
   cartItems: [],
}

export const cartReducer = (state = initialState, action) => {
   switch (action.type) {
      case "ADD_TO_CART":
         const inCart = state.cartItems.find((prod) => (prod.id === action.payload.id ? true : false))
         return {
            ...state,
            cartItems: inCart
               ? state.cartItems.map((item) =>
                    item.id === action.payload.id ? { ...item, qty: action.payload.qty } : item
                 )
               : [...state.cartItems, action.payload],
         }

      case "DELETE_FROM_CART":
         return {
            ...state,
            cartItems: state.cartItems.filter((x) => x.id !== action.payload.id),
         }

      case "ADJUST_QTY":
         return {
            ...state,
            cartItems: state.cartItems.map((item) =>
               item.id === action.payload.id ? { ...item, qty: action.payload.qty } : item
            ),
         }
      default:
         return state
   }
}
