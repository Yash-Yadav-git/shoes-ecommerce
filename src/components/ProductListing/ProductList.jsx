import { useEffect, useRef, useState } from "react";
import "../Homepage/ProductDisplay/ProductDisplay.css";
import { Link, useNavigate } from "react-router-dom";
import { getPrice } from "../../utlis/common";

const ProductDisplayList = ({ data }) => {
  const [productImage, setProductImage] = useState(data.imageLeft);
  const { Price, id, shoeName } = data;
  const [price, setPrice] = useState(Price);
  const [shoeNameLocal, setshoeNameLocal] = useState([]);

  useEffect(() => {
    if (Price) {
      setPrice(getPrice(Price))
    }
    if (shoeName) {
      for (let i = 0; i < shoeName.length; i++) {
        if (shoeName.charAt(i) !== " " && shoeName.charAt(i) !== "/") {
          setshoeNameLocal((prev) => [...prev, shoeName.charAt(i)]);
        }
      }
    }
  }, [Price, shoeName]);

  return (
    <div
      className="product-list"
      id={data.id}
      onMouseOver={() => setProductImage(data.imageRight)}
      onMouseOut={() => setProductImage(data.imageLeft)}
    >
      <Link
        to={`/producDetails/${shoeNameLocal.join("")}`}
        state={{data: data}}
      >
        <img src={productImage} alt="product-image" />
      </Link>
      <div className="brand-name">
        <p>{data.brand}</p>
      </div>
      <di className="sneaker-details">
        <p>{data.shoeName}</p>
      </di>
      <div className="sneaker-details price">
        <p>&#8377; {price}</p>
      </div>
    </div>
  );
};

export default ProductDisplayList;
