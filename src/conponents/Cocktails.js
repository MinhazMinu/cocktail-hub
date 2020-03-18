import React from "react";
import { Link } from "react-router-dom";
export default function Cocktail({ image, name, id, info, glass }) {
  return (
    <div className="coc-con left" >
      <div className="coc-img">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3> {name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </div>
  );
}
