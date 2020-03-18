import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page section">
      <div className="error-container">
        <h1>Opps! Dead End..</h1>

        <button>
          {" "}
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default Error;
