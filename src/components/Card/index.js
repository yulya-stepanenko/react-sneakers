import React from "react";
import styles from "./Card.module.scss";

function Card({ id, title, imageUrl, price, onFavorite, onPlus, favorited = false }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="Unliked" onClick={onClickFavorite} />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Ціна:</span>
          <b>{price} грн</b>
        </div>
        <img
          className="button"
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="Plus"
          onClick={onClickPlus}
        />
      </div>
    </div>
  );
}

export default Card;
