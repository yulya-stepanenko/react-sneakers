function Drawer({ onClose, items = [], onRemove }) {
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
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    className="cartItemImg"
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price}</b>
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
            <div class="cartTotalBlock">
              <ul className="cartTotalBlock">
                <li>
                  <span>Всього:</span>
                  <div></div>
                  <b>21 498 грн</b>
                </li>
                <li>
                  <span>Податок 5%</span>
                  <div></div>
                  <b>1074 грн</b>
                </li>
              </ul>
              <button className="greenButton">
                Оформити замовлення <img src="/img/arrow.svg" alt="Arrow" />{" "}
              </button>
            </div>
          </div>
        ) : (
          <div class="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              class="mb-20"
              width="120px"
              height="120px"
              src="/img/empty-cart.jpg"
              alt="Empty"
            />
            <h2>Кошик порожній</h2>
            <p class="opacity-6">
              Додайте хоча б одну пару кросівок, щоб зробити замовлення
            </p>
            <button onClick={onClose} class="greenButton">
              <img src="/img/arrow.svg" alt="Arrow" />
              Повернутися назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
