import React from "react";
import { Link } from "react-router-dom";

import cartEmpty from "../assets/img/empty-cart.png";

export const CartEmpty: React.FC = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>
          Корзина пустая <span>😔</span>
        </h2>
        <p>
          Вероятней всего, вы не заказывали пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={cartEmpty} alt="emptycart" />
        <Link to="/" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  );
};
