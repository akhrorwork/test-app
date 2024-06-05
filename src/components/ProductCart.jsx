import { Link } from "react-router-dom";

function ProductCart({ product }) {
  const {
    id,
    title,
    brand,
    availabilityStatus,
    description,
    category,
    thumbnail,
    price,
  } = product;
  return (
    <Link to={`/product/${id}`}>
      <div>
        <h1>{title}</h1>
        <p>${price}</p>
        <img src={thumbnail} alt="" />
        <p>{description}</p>
        <p>{category}</p>
      </div>
    </Link>
  );
}

export default ProductCart;
