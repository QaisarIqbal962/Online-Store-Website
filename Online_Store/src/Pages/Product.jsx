import { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";
import { ShopContext } from "../Context/ShopContext";

const Product = () => {
  const { all_product: allProduct } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allProduct.find((item) => item.id === Number(productId));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
