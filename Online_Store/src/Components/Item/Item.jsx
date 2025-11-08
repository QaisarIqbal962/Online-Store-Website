import "./Item.css";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const Item = ({
  id,
  image,
  name,
  new_price: newPrice,
  old_price: oldPrice,
}) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img onClick={handleScrollToTop} src={image} alt={name} />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">${newPrice}</div>
        <div className="item-price-old">${oldPrice}</div>
      </div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  new_price: PropTypes.number.isRequired,
  old_price: PropTypes.number.isRequired,
};

export default Item;
