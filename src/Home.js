import React from "react";
import "./home.css";
import Product from "./Product";
import "./product.css";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product />
          <Product />
        </div>

        <div className="home_row">
          <div className="home_col"></div>

          <div className="home_col"></div>

          <div className="home_col"></div>
        </div>

        <div className="home_row">
          <div className="home_col"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
