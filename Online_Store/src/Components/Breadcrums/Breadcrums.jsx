import PropTypes from "prop-types";
import "./Breadcrums.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrums = ({ product }) => {
  if (!product) {
    return null;
  }
  return (
    <div className="breadcrums">
      Home <img src={arrow_icon} alt="arrow" /> SHOP{" "}
      <img src={arrow_icon} alt="arrow" /> {product.category}{" "}
      <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

Breadcrums.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default Breadcrums;
