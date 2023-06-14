import { useLocation, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { getPrice } from "../../utlis/common";
import { useState } from "react";
import Navbar from "../../components/Homepage/Navbar/Navbar";
import CartModal from "../../components/ProductDetails/CartModal";

const ProuctDetails = () => {
  const { state } = useLocation();
  const { data } = state;
  console.log(data);
  const [size, setSize] = useState(7);
  const [aboutSectionClicked, setAboutSectionClicked] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart((prev) => !prev);
    console.log("handle cart clicked");
  };

  return (
    <>
      <div className={showCart ? "no-scroll" : ""}>
        <Navbar />
      </div>
      <div
        className={`product-details-caontainer ${showCart ? "no-scroll" : ""}`}
      >
        <div className="product-details-images-conatiner">
          <img src={data.imageLeft} />
          <img src={data.imageRight} />
          <img src={data.imageLeft} />
          <img src={data.imageRight} />
        </div>

        <div className="prouduct-details-information-container">
          <div className="product-details-brand-name">{data.brand}</div>
          <div className="product-details-sneaker-details">{data.shoeName}</div>
          <div className="product-details-price">
            &#8377; {getPrice(data.Price)}
          </div>
          <div className="size-container">
            <div
              className={`size-box ${size === 7 ? "selected" : null}`}
              onClick={(e) => setSize(7)}
            >
              7
            </div>
            <div
              className={`size-box ${size === 8 ? "selected" : null}`}
              onClick={(e) => setSize(8)}
            >
              8
            </div>
            <div
              className={`size-box ${size === 9 ? "selected" : null}`}
              onClick={(e) => setSize(9)}
            >
              9
            </div>
            <div
              className={`size-box ${size === 10 ? "selected" : null}`}
              onClick={(e) => setSize(10)}
            >
              10
            </div>
            <div
              className={`size-box ${size === 11 ? "selected" : null}`}
              onClick={(e) => setSize(11)}
            >
              11
            </div>
            <div
              className={`size-box ${size === 12 ? "selected" : null}`}
              onClick={(e) => setSize(12)}
            >
              12
            </div>
          </div>
          <div className="add-to-cart-button" onClick={handleCartClick}>
            ADD TO CART
          </div>

          <div
            className="about-section-container"
            onClick={() => setAboutSectionClicked((prev) => !prev)}
          >
            <div className="about-product-heading">
              <p>ABOUT PRODUCT</p>
              <p>+</p>
            </div>
            {aboutSectionClicked ? (
              <div className="product-about-list">
                Manufacturer : Nike India Pvt. Ltd. Country of Origin : Vietnam
                Imported By : Nike India Pvt. Ltd. Weight : 0.95 KG Generic Name
                : SHOE Unit of Measurement : 1 Pair Marketed By : Superkicks
                India Pvt. Ltd. Article Code : DV7183-100
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <CartModal
        showCart={showCart}
        data={data}
        handleCartClick={handleCartClick}
      />
    </>
  );
};

export default ProuctDetails;
