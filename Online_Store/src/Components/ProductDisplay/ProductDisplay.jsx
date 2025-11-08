import PropTypes from "prop-types";
import { useContext } from "react";
import "./ProductDisplay.css";
import starIcon from "../Assets/star_icon.png";
import starDullIcon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  if (!product) {
    return null;
  }

  return (
    <div className="productDisplay">
      <div className="productDisplay-left">
        <div className="productDisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productDisplay-img">
          <img className="productDisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-star">
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starDullIcon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productDisplay-right-prices">
          <div className="productDisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productDisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productDisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close fitting and with
          a round neckline and short sleeves,worn as an undershirt or outer
          garment.
        </div>
        <div className="productDisplay-right-size">
          <h1>Select Size</h1>
          <div className="productDisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button type="button" onClick={() => addToCart(product.id)}>
          ADD TO CART
        </button>
        <p className="productDisplay-right-category">
          <span>Category : </span>
          {product.category}
        </p>
        <p className="productDisplay-right-category">
          <span>Tags : </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

ProductDisplay.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    new_price: PropTypes.number.isRequired,
    old_price: PropTypes.number.isRequired,
    category: PropTypes.string,
  }),
};

export default ProductDisplay;
