function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
      <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Ціна:</span>
          <b>12 999 грн</b>
        </div>
        <img
          className="button"
          width={11}
          height={11}
          src="/img/btn-plus.svg"
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
