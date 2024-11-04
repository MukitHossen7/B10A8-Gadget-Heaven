import { useLoaderData, useParams } from "react-router-dom";

const ProductCard = () => {
  const { category } = useParams();
  const allDatas = useLoaderData();
  console.log(allDatas);
  return (
    <div>
      <h1>Product {category}</h1>
    </div>
  );
};

export default ProductCard;
