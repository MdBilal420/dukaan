import axios from "axios"
import { createContext, useContext, useReducer } from "react"


const ProductContext = createContext()

export const useData = () => {
    return useContext(ProductContext)
}

const cartlist = []
const wishlist = []
const productList = []
const bill = 0
const productDetail = null

export const ProductProvider = ({ children }) => {

    const [state, dispatch] =
        useReducer(reducer,
            {
                sortType: null,
                ShowAllProduct: false,
                ShowFastDelivery: false,
                cartlist,
                wishlist,
                productList,
                bill,
                productDetail
            }
        )

    const addToCartAndDb = async (details) => {

        try {
            const { data, status } = await axios.post(`https://secret-brook-26591.herokuapp.com/cart/`, {
                product: { _id: details },
                quantity: 1
            })
            if (status === 200) {
                dispatch({ type: "ADD_TO_CART", payload: data })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const addToWishlistAndDb = async (details) => {
        try {
            const { data, status } = await axios.post(`https://secret-brook-26591.herokuapp.com/wishlist/`, {
                product: { _id: details }
            })
            if (status === 200) {
                dispatch({ type: "ADD_TO_WISHLIST", payload: data })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const deleteFromCart = async (id) => {
        try {
            const { status } = await axios.delete(`https://secret-brook-26591.herokuapp.com/cart/${id}`)
            if (status === 200) {
                dispatch({ type: "DELETE_ITEM_FROM_CART", payload: id })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const deleteFromWishlist = async (id) => {
        try {
            const { status } = await axios.delete(`https://secret-brook-26591.herokuapp.com/wishlist/${id}`)
            if (status === 200) {
                dispatch({ type: "DELETE_ITEM_FROM_WISHLIST", payload: id })
            }
        } catch (error) {
            console.log(error)
        }
    }


    return <ProductContext.Provider value=
        {{
            productList: state.productList,
            wishlist: state.wishlist,
            sortType: state.sortType,
            ShowAllProduct: state.ShowAllProduct,
            ShowFastDelivery: state.ShowFastDelivery,
            state,
            bill: state.bill,
            productDetail: state.productDetail,
            addToCartAndDb,
            addToWishlistAndDb,
            deleteFromCart,
            deleteFromWishlist,
            dispatch
        }}>
        {children}
    </ProductContext.Provider>
}

const reducer = (state, action) => {

    switch (action.type) {

        case "SET_PRODUCTS":
            return {
                ...state,
                productList: action.payload
            }

        case "SET_CART":
            return {
                ...state,
                cartlist: action.payload
            }

        case "SET_WISHLIST":
            return {
                ...state,
                wishlist: action.payload
            }

        case "SELECT_PRODUCT":
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
            const found = state.cartlist.find((item) => item._id === action.payload._id)
            if (!found) {
                return {
                    ...state,
                    cartlist: state.cartlist.concat(action.payload.cart),
                }
            }
            return state

        case "INCREMENT":
            return {
                ...state,
                cartlist: state.cartlist.map((item) => item._id === action.payload._id ?
                    { ...item, quantity: action.payload.quantity + 1 } : item)
            }

        case "DECREMENT":
            return {
                ...state,
                cartlist: state.cartlist.map((item) => item._id === action.payload._id ?
                    { ...item, quantity: action.payload.quantity - 1 } : item)
            }

        case "DELETE_ITEM_FROM_CART":

            return {
                ...state,
                cartlist: state.cartlist.filter((item) => item.product._id !== action.payload)
            }

        case "DELETE_ITEM_FROM_WISHLIST":

            return {
                ...state,
                wishlist: state.wishlist.filter((item) => item.product._id !== action.payload)
            }

        case "ADD_TO_WISHLIST":
            const present = state.wishlist.find((item) => item._id === action.payload._id)
            if (!present) {
                return {
                    ...state,
                    wishlist: state.wishlist.concat(action.payload.wishlist)
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



