import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <div className="notfound">
        <div className="content">
          <h1>404 Not found</h1>
          <Link className="btn" to={"/"}>
            Back To Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
