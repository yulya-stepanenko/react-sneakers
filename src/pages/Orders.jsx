import React from "react";
import axios from "axios";

import Card from "../components/Card";
import AppContext from "../context";
import Info from "../components/Info";

function Orders() {
  const { onAddToFavorites, onAddToCart } = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          "https://64cb58f3700d50e3c705c047.mockapi.io/orders"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Помилка при запитів замовлень");
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мої замовлення</h1>
      </div>

      {orders.length > 0 ? (
        <div className="d-flex flex-wrap">
          {(isLoading ? [...Array(8)] : orders).map((item, index) => (
            <Card
              key={index}
              onFavorite={(obj) => onAddToFavorites(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              loading={isLoading}
              {...item}
            />
          ))}
        </div>
      ) : (
        <div>
          <Info
            title={"У вас немає замовлень"}
            description={"Оформіть хоча б одне замовлення"}
            image={"/img/sad-emoji.png"}
          />
        </div>
      )}
    </div>
  );
}

export default Orders;
