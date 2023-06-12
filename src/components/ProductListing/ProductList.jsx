import { useEffect, useRef, useState } from "react";
import "../Homepage/ProductDisplay/ProductDisplay.css";

const ProductDisplayList = ({ data }) => {
  const [productImage, setProductImage] = useState(data.imageLeft);
  const { Price } = data
  const [price, setPrice] = useState(Price)

  useEffect(() => {
    if (Price) {
      let array = String(Price).split('').map((n)=> Number(n))
      let returnArray = [[...array.splice(0,1), ','].join(''), ...array, '.00'].join('')
      setPrice(returnArray)
    }
  },[Price])
  
  return (
    <div className="product-list" id={data.id} onMouseOver={() => setProductImage(data.imageRight)} onMouseOut={() => setProductImage(data.imageLeft)}>
      <img src={productImage} alt="product-image" />
      <div className="brand-name">
        <p>
          {data.brand}
        </p>
      </div>
      <di className='sneaker-details'>
        <p>{data.shoeName}</p>
      </di>
      <div className="sneaker-details price">
        <p>&#8377; {price}</p>
      </div>
    </div>
  );
};

export default ProductDisplayList;
