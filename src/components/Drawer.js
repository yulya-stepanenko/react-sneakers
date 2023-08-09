import React from "react";
import axios from "axios";

import Info from "./Info";
import { useCart } from "../hooks/useCart";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, items = [], onRemove }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://64cb58f3700d50e3c705c047.mockapi.io/orders",
        { items: cartItems }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://64c7b457a1fe0128fbd52b74.mockapi.io/cart/" + item.id
        );
        await delay(300);
      }
    } catch (error) {
      alert("Не вдалось оформити замовлення :(");
    }
    setIsLoading(false);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Кошик{" "}
          <img
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="Close"
            onClick={onClose}
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items flex">
              {items.map((obj) => (
                <div
                  key={Number(obj.id)}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    className="cartItemImg"
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} грн</b>
                  </div>
                  <img
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                    onClick={() => onRemove(obj.id)}
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul className="cartTotalBlock">
                <li>
                  <span>Всього:</span>
                  <div></div>
                  <b>{totalPrice} грн</b>
                </li>
                <li>
                  <span>Податок 5%</span>
                  <div></div>
                  <b>{(totalPrice * 0.05).toFixed(2)} грн</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Оформити замовлення <img src="/img/arrow.svg" alt="Arrow" />{" "}
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Замовлення оформлене!" : "Кошик порожній"}
            description={
              isOrderComplete
                ? `Ваше замовлення #${orderId} скоро буде передано кур'єрській доставці`
                : "Додайте хоча б одну пару кросівок, щоб зробити замовлення"
            }
            image={
              isOrderComplete
                ? "/img/complete-order.jpg"
                : "/img/empty-cart.jpg"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
