import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div className="box-layout box-layout__fourzerofour">
    <div className="box-layout__box">
      <h1 className="box-layout__title">404!</h1>
      <Link to="/">
        <button className="button button--start">Home</button>
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
