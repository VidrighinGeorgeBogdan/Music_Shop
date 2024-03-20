import React, { useContext } from "react";
import { ShopContext } from '../context/shop_context'

export const CartItem = (props) => {
    const { id, title, newPrice, img, genre, category } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
        useContext(ShopContext);

    return (
        <div className="cartItem">
            <img src={img} />
            <div className="description">
                <p>
                    <b>{title}</b>
                </p>
                <p> Price: ${newPrice}</p>
                <p style={{fontSize:20}}>Genre: {genre}</p>
                <p style={{fontSize:20}}>Category: {category}</p>
                <div className="countHandler">
                    <button className="buttonPlusMinus" onClick={() => removeFromCart(id)}> - </button>
                    <input
                        value={cartItems[id]}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                    />
                    <button className="buttonPlusMinus" onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    );
};
