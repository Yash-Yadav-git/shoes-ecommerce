import { useEffect, useRef, useState } from "react";
import "./ProductDisplay.css";

const ProductDisplayList = ({ data }) => {
   const [ productImage, setProductImage] = useState(data.imageLeft) 
  return (
    <li id={data.id} className={"product-display-list-wrapper"} onMouseOver={()=>setProductImage(data.imageRight)} onMouseOut={()=>setProductImage(data.imageLeft)}>
      <img src={productImage} alt="product-image" />

      <div className="product-display-list brand_name">
              <h1>{data.brand} {data.id }</h1>
      </div>

      <div className="product-display-list brand_name">
        <h1>{data.shoeName}</h1>
      </div>

      <div className="product-display-list brand_name">
        <p>{data.price}</p>
      </div>
    </li>
  );
};

export default ProductDisplayList;
