import styles from "./Card.module.scss";

function Card(props) {
  const onClickButton = () => {
    alert(props.title);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          src="/img/heart-unliked.svg"
          alt="Unliked"
          onClick={props.onClickFavorite}
        />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Ціна:</span>
          <b>{props.price} грн</b>
        </div>
        <img
          className="button"
          width={11}
          height={11}
          src="/img/btn-plus.svg"
          alt="Plus"
          onClick={props.onClickPlus}
        />
      </div>
    </div>
  );
}

export default Card;
