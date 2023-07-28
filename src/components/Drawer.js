function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
    <div className="drawer">
      <h2 className="d-flex justify-between mb-30">
        Кошик{" "}
        <img
          className="removeBtn cu-p"
          src="/img/btn-remove.svg"
          alt="Remove"
        />
      </h2>

      <div className="items">
        <div className="cartItem d-flex align-center mb-20">
          <div
            className="cartItemImg"
            style={{ backgroundImage: "url(/img/sneakers/2.jpg)" }}
          ></div>
          <div className="mr-20 flex">
            <p className="mb-5">Чоловічі кросівки Nike Air Max 270</p>
            <b>12 999 грн</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
        </div>

        <div className="cartItem d-flex align-center mb-20">
          <div
            className="cartItemImg"
            style={{ backgroundImage: "url(/img/sneakers/2.jpg)" }}
          ></div>
          <div className="mr-20 flex">
            <p className="mb-5">Чоловічі кросівки Nike Air Max 270</p>
            <b>12 999 грн</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
        </div>

        <div className="cartItem d-flex align-center mb-20">
          <div
            className="cartItemImg"
            style={{ backgroundImage: "url(/img/sneakers/2.jpg)" }}
          ></div>
          <div className="mr-20 flex">
            <p className="mb-5">Чоловічі кросівки Nike Air Max 270</p>
            <b>12 999 грн</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
        </div>
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
          </div>
  );
}

export default Drawer;
