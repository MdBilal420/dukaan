import { createContext, useContext, useReducer } from "react";


export const RouteContext = createContext()

export const useRoute = () => {
    return useContext(RouteContext)
}

export const RouteProvider = ({ children }) => {

    const reducer = (state, action) => {

        switch (action.type) {
            case "ROUTE":
                return {
                    ...state,
                    route: action.payload
                }

            default:
                return state
        }

    }

    const [state, dispatch] = useReducer(reducer, { route: "product" })


    return <RouteContext.Provider value={{
        state,
        dispatch
    }}>
        {children}
    </RouteContext.Provider>
}