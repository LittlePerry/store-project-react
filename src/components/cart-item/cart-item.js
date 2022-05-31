import React from 'react';

import "./cart-item.css";
import {GameCover} from "../game-cover";

export const CartItem = ({title, price, id}) => {
    return (
        <div className="cart-item">
            <span>{title}</span>
            <div className="cart-item__price">
                <span>{price} руб.</span>
            </div>
        </div>
    );
};