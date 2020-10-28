export const groupSameItemsInCart = (cartItems, cartItemToAdd) => {
    const existingCartItems = cartItems.find(item => item.id === cartItemToAdd.id)

    if (existingCartItems) {
        return cartItems.map(item => 
            item.id === cartItemToAdd.id 
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}