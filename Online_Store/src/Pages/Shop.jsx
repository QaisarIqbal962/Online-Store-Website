import React from "react";

import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";

const Shop = () => {
  return (
    <main className="shop-container">
      <Hero />
      <Popular />
      <Offers />
      <NewCollections/>
      <NewsLetter/>
      <DescriptionBox/>
    </main>
  );
};

export default Shop;
