import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";

function Card({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  added = false,
  loading = false,
}) {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="155" height="135" />
          <rect x="0" y="151" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="171" rx="5" ry="5" width="93" height="15" />
          <rect x="0" y="208" rx="5" ry="5" width="80" height="24" />
          <rect x="118" y="199" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite}>
            <img
              src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
              alt="Unliked"
              onClick={onClickFavorite}
            />
          </div>
          <img width="100%" height={135} src={imageUrl} alt="Sneakers" />
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
        </>
      )}
    </div>
  );
}

export default Card;
