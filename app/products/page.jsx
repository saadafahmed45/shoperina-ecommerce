import React from "react";
// import productsApi from "../api/productsApi";
import ProductsCard from "../components/ProductsCard";
import { productsApi } from "../api/productsApi";

const Products = async () => {
  const product = await productsApi();
  // console.log(products);
  const products = product.products;
  // // data filtering start
  // const [quary, setQuary] = useState("");

  // console.log(product.filter((pr) => pr.title.toLowerCase().includes(quary)));
  // // console.log(quary);

  return (
    <div className=" mx-8 lg:mx-24 my-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-center">
        {products.map((product, index) => (
          <ProductsCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
