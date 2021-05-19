import { useData } from "../../context/product-context"

const useWishlist = () => {

    const { addToWishlistAndDb } = useData()

    const addToWishlist = (details) => {
        addToWishlistAndDb(details)
    }

    return { addToWishlist }
}

export default useWishlist