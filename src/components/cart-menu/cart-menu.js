import React from 'react';
import {calcTotalPrice} from "../../utils/utils";
import {Button} from "../button";

import "./cart-menu.css";
import {CartItem} from "../cart-item";

export const CartMenu = ({items, onClick}) => {
    return (
        <div className="cart-menu">
            <div className="cart-menu__game-list">
                {
                    items.length > 0 ? items.map(game =>
                        <CartItem
                            key={game.title}
                            title={game.title}
                            id={game.id}
                            price={game.price}
                        />)
                        :
                        "Корзина пуста"
                }
            </div>
            {
                items.length > 0 ?
                    <div className="cart-menu__arrange">
                        <div className="cart-menu__total-price">
                            <span>Итого: </span>
                            <span>{calcTotalPrice(items)} руб.</span>
                        </div>
                        <Button type="primary" size="m" onClick={onClick}>
                            Оформить заказ
                        </Button>
                    </div>
                    :
                    null
            }
        </div>
    );
};