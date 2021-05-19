import { useData } from "../../context/product-context"

const useProduct = () => {

    const { addToCartAndDb } = useData()


    const addToCart = (details) => {
        addToCartAndDb(details)
    }



    return { addToCart }
}

export default useProduct