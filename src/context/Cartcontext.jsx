import { createContext, useState } from 'react'
import { getProductData } from '../Data/items'

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    deleteFromCart: () => { },
    getTotalAmount: () => { }

})
export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([])

    function addItemToCart(id) {
        const quantity = getProductQuantity(id)

        if (quantity === 0) {
            setCartProducts([...cartProducts, { id: id, quantity: 1 }])
        }
        else {
            setCartProducts(
                cartProducts?.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                )
            )
        }
    }
    function getProductQuantity(id) {
        const quantity = cartProducts?.find((item) => item.id === id)?.quantity

        if (quantity === undefined) {
            return 0
        }



    }

    function deleteFromCart(id) {
        setCartProducts((cartProducts) =>
            cartProducts.filter((item) => {
                return item.id != id
            })
        )

    }
    function removeItemFromCart(id) {
        const quantity = getProductQuantity(id)

        if (quantity === 1) {
            deleteFromCart(id)
        }
        else {
            setCartProducts(
                cartProducts.map((item) => item === id ? { ...item, quantity: item.quantity - 1 } : item)

            )
        }
    }

    function getTotalAmount() {
        let TotalAmount = 0
        cartProducts.map((item) => {
            const ProductData = getProductData(item.id)

            TotalAmount += ProductData.price * item.quantity
        })
    }
    const ContextValue = {
        items: cartProducts,
        getProductQuantity,
        addItemToCart,
        removeItemFromCart,
        deleteFromCart,
        getTotalAmount

    }
    return (
        <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
    )
}