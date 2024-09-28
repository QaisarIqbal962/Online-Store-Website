import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox-navigator">
        <div className="descriptionBox-nav-box">Description</div>
        <div className="descriptionBox-nav-box-fade">Reviews (122)</div>
      </div>
      <div className="descriptionBox-description">
        <p>
          An e-commerce website as an online platform that facilitate buying and
          selling of products or services over the internet serves as a virtual
          marketplace where businesses and individual showcase their products,
          interact with customers, and conduct transactions without the need for
          a physical presence. E-commerce website have gained immense popularity
          due to their convene accessability, and the global reach they offer.
        </p>
        <p>
          E-commerce website typically display products or services a detailed
          description, images, prices, and any available variants (e.g.,sizes,
          colors). Each product usually has its own detail with relevant
          information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
