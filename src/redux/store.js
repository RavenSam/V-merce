import rootReducer from "./rootReducer"
import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

const initialeStore = {
   cartReducer: {
      cartItems: JSON.parse(localStorage.getItem("cartItems")) ?? [],
   },
}

export const store = createStore(rootReducer, initialeStore, composeWithDevTools())
