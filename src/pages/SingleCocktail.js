import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        // ====+++++++++===

        if (data.drinks) {
          const newCocktails = data.drinks.map(item => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass
            } = item;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass
            };
          });
          setCocktail(newCocktails);
        } else {
          setCocktail([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
    // ++++++++++++++++++++
  }, [id]);
  if (loading) {
    return <h1 className="section-title">Loading....</h1>;
  }
  if (!cocktail) {
    return <h2 className="section-title">No Cocktails Found </h2>;
  } else {
    console.log(cocktail);

    const { name, id, info, glass, image } = cocktail[0];
    return (
      <div className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          Back
        </Link>
        <h2 className="section-title">Drinks Name : {name}</h2>
        <div className="drink">
          <img src={image} alt="" />{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deserunt,Lorem ipsum dolor sit amet consectetur adipisicing
            elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deserunt, Deserunt, recusandae?{" "}
          </p>
        </div>

        <h3>{info}</h3>
        <h3>Served in : {glass}</h3>
      </div>
    );
  }
};

export default SingleCocktail;
