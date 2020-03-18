import React from "react";
import Cocktail from "./Cocktails";

const CocktailsList = ({ cocktails, loading }) => {
  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }

  if (cocktails.length < 1) {
    return <h2 className="section-title">No Cocktails Match</h2>;
  }

  return (
    <div className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-canter">
        {cocktails.map(item => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default CocktailsList;
