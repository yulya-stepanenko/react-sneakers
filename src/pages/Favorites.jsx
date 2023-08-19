import React from "react";

import Card from "../components/Card";
import AppContext from "../context";
import Info from "../components/Info";

function Favorites() {
  const { favorites, onAddToFavorites } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мої закладки</h1>
      </div>

      {favorites.length > 0 ? (
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
      ) : (
        <div>
          <Info
            title={"Закладок немає :("}
            description={"Ви нічого не додавали до закладок"}
            image={"/img/crying-sad-emoji.png"}
          />
        </div>
      )}
    </div>
  );
}

export default Favorites;
