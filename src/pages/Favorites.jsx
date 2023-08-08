import React from "react";
import Card from "../components/Card";
import { AppContext } from "../App";

function Favorites() {
  const { favorites, onAddToFavorites } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мої закладки</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favorites.map((item, index) => (
          <Card
            key={index}
            favorited={true}
            onFavorite={onAddToFavorites}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
