import React, { useEffect, useRef, useState } from "react";
import { productData } from "../../../constants/data";
import ProductDisplayList from "./ProductDisplayList";
import LeftArrow from "../../../assests/Homepage/ProductDisplay/less-than-symbol.png";
import RightArrow from "../../../assests/Homepage/ProductDisplay/greater-than-symbol.png";
import "./ProductDisplay.css";
import { Link } from "react-router-dom";

const ProductDisplay = () => {
  const containerRef = useRef();
  let productDataLocal = [...productData];
  const [productToDisplay, setProductToDisplay] = useState(
    productDataLocal.slice(0, 4)
  );
  const [slideCounter, setSlideCounter] = useState(3);

  const handleScroll = (buttonClicked) => {
    if (buttonClicked === "right") {
      let localCounter = slideCounter + 1;
      if (localCounter === productDataLocal.length) return;
      setProductToDisplay([
        productDataLocal[localCounter - 3],
        productDataLocal[localCounter - 2],
        productDataLocal[localCounter - 1],
        productDataLocal[localCounter],
      ]);
      setSlideCounter((prev) => prev + 1);
    } else {
      if (slideCounter === 3) return;
      let localCounter = slideCounter - 1;
      setProductToDisplay([
        productDataLocal[localCounter - 3],
        productDataLocal[localCounter - 2],
        productDataLocal[localCounter - 1],
        productDataLocal[localCounter],
      ]);
      setSlideCounter((prev) => prev - 1);
    }
  };

  return (
    <div className="product-display-wrapper">
      <div className="product-display-new-arrivals">
        <h1>NEW ARRIVALS</h1>
      </div>
      <div className="product-display-container">
        <div
          className="carousle-arrow-left"
          onClick={() => handleScroll("left")}
        >
          <img src={LeftArrow} width={"36px"} height={"36px"} />
        </div>
        <ul ref={containerRef} className="list">
          {productToDisplay.map((product) => (
            <ProductDisplayList
              key={product.id}
              data={product}
              setSlideCounter={setSlideCounter}
            />
          ))}
        </ul>
        <div className="carousle-arrow-right">
          <img
            src={RightArrow}
            width={"36px"}
            height={"36px"}
            onClick={() => handleScroll("right")}
          />
        </div>
      </div>
      <div className="product-display-cta">
        <Link to={"/productsList"}>
          <span>View All</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductDisplay;
