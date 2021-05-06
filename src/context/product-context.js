import { createContext, useContext, useReducer } from "react"
// import axios from "axios"


const ProductContext = createContext()

export const useProduct = () => {
    return useContext(ProductContext)
}

const cart = []
const wishlist = []
const productList = []
const productDetail = null
const bill = 0

export const ProductProvider = ({ children }) => {


    const [state, dispatch] =
        useReducer(reducer,

            { sortType: null, ShowAllProduct: false, ShowFastDelivery: false, cart, wishlist, productList, bill, productDetail }
        )



    return <ProductContext.Provider value=
        {{
            productList: state.productList,
            sortType: state.sortType,
            ShowAllProduct: state.ShowAllProduct,
            ShowFastDelivery: state.ShowFastDelivery,
            cart: state.cart,
            wishlist: state.wishlist,
            bill: state.bill,
            productDetail: state.productDetail,
            dispatch
        }}>
        {children}
    </ProductContext.Provider>

}


const reducer = (state, action) => {
    console.log(state)

    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                productList: action.payload
            }
        case "SELECT_PRODUCT":
            //console.log(action.payload)
            return {
                ...state,
                productDetail: action.payload
            }
        case "ITEM_IN_STOCK":
            return state = {
                ...state,
                ShowAllProduct: !state.ShowAllProduct
            }
        case "FAST_DELIVERY":
            return {
                ...state,
                ShowFastDelivery: !state.ShowFastDelivery
            }
        case "SORT":
            return {
                ...state,
                sortType: action.payload
            };
        case "ADD_TO_CART":
            const found = state.cart.find((item) => item._id === action.payload._id)
            if (!found) {
                return {
                    ...state,
                    cart: state.cart.concat(action.payload),
                }
            }
            return state

        // const present = state.wishlist.find((item) => item.id === action.payload.id)
        // if (!present) {
        //     return {
        //         ...state,
        //         wishlist: state.wishlist.concat(action.payload)
        //     }
        // }
        // return state
        case "INCREMENT":
            return {
                ...state,
                cart: state.cart.map((item) => item._id === action.payload._id ?
                    { ...item, quantity: action.payload.quantity + 1 } : item)

            }
        case "DECREMENT":
            return {
                ...state,
                cart: state.cart.map((item) => item._id === action.payload._id ?
                    { ...item, quantity: action.payload.quantity - 1 } : item)
            }
        case "DELETE_ITEM_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((item) => item._id !== action.payload._id)
            }
        case "DELETE_ITEM_FROM_WISHLIST":
            return {
                ...state,
                wishlist: state.wishlist.filter((item) => item._id !== action.payload._id)
            }

        case "ADD_TO_WISHLIST":
            const present = state.wishlist.find((item) => item._id === action.payload._id)
            if (!present) {
                return {
                    ...state,
                    wishlist: state.wishlist.concat(action.payload)
                }
            }
            return state

        case "RESET":
            return {
                ...state,
                sortType: null, ShowAllProduct: false, ShowFastDelivery: false
            }


        default:
            return state;
    }
};



