import React, {useCallback, useState} from 'react';
import {useSelector} from "react-redux";
import {BiCartAlt} from 'react-icons/bi'
import {calcTotalPrice} from "../../utils/utils";

import './cart-block.css';
import {CartMenu} from "../cart-menu";
import {ItemsInCart} from "../items-in-cart";
import {useNavigate} from "react-router-dom";

export const CartBlock = () => {

    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = calcTotalPrice(items)
    const [isCartMenuVisible, setCartMenuVisible] = useState(false)
    const navigate = useNavigate()

    const handleClick = useCallback(() => {
        setCartMenuVisible(false)
        navigate("/order")
    }, [navigate])

    return (
        <div className="cart-block">
            <ItemsInCart quantity={items.length} />
            <BiCartAlt size={25} className="cart-block__icon" onClick={() => setCartMenuVisible(!isCartMenuVisible)}/>
            {totalPrice > 0  ?
                <span className="cart-block__total-price">{totalPrice} руб.</span>
                :
                null
            }
            {isCartMenuVisible ? <CartMenu items={items} onClick={handleClick} /> : null}
        </div>
    );
};