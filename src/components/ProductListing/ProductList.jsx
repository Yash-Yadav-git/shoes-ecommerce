import React from "react";

const ProductList = ({data}) => {
  return (
    <div className="product-view-conatiner">
      <img />
      <img src={data.imageLeft} alt="product-image" />
      <div className="product-view-list brand_name">
        <h1>
          {data.brand} {data.id}
        </h1>
      </div>

      <div className="product-view-list brand_name">
        <h1>{data.shoeName}</h1>
      </div>

      <div className="product-view-list brand_name">
        <p>{data.price}</p>
      </div>
    </div>
  );
};

export default ProductList;
