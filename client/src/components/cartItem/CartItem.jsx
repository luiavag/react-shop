import React from 'react'

import { CartItemContainer, ItemImage, ItemInfoContainer } from './CartItemStyles'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <CartItemContainer>
            <ItemImage src={imageUrl} alt={name} />
            <ItemInfoContainer>
                <span>{name}</span>
                <span>
                    {quantity} x ${price}
                </span>
            </ItemInfoContainer>
        </CartItemContainer>
    )
}

export default React.memo(CartItem)
