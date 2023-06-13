import { useEffect, useRef, useState } from "react";
import "./ProductDisplay.css";
import { getPrice } from "../../../utlis/common";

const ProductDisplayList = ({ data }) => {
   const [ productImage, setProductImage] = useState(data.imageLeft) 
  return (
    <li id={data.id} className={"product-display-list-wrapper"} onMouseOver={()=>setProductImage(data.imageRight)} onMouseOut={()=>setProductImage(data.imageLeft)}>
      <img src={productImage} alt="product-image" />

      <div className="homepage-product-list brand_name">
        <p>{data.brand} {data.id }</p>
      </div>

      <div className="homepage-product-list shoe-details">
        <p>{data.shoeName}</p>
      </div>

      <div className="homepage-product-list shoe-details">
        <p>{getPrice(data.Price)}</p>
      </div>
    </li>
  );
};

export default ProductDisplayList;
