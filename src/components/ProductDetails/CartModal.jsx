import addSign from "../../assests/Cart/plus-svgrepo-com.svg";
import minusSign from "../../assests/Cart/minus-svgrepo-com.svg";
import CancelSign from "../../assests/Cart/cancel.png";
import "./CartModal.css";
import { useState } from "react";

const CartModal = ({ showCart, handleCartClick, data }) => {
  const [counter, setCounter] = useState(1);
  const [error, setError] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCounterClick = (buttonClicked) => {
    if (buttonClicked === "add") {
      if (counter >= 6) {
        setError("You can oly add 6 items");
        return;
      }
      setCounter((prev) => prev + 1);
    } else if (buttonClicked === "sub") {
      if (counter === 1) {
        setError("Atleast one item should be there in cart");
        return;
      }
      setCounter((prev) => prev - 1);
    }
  };
  return (
    <>
      {showCart ? (
        <div className="modal-container">
          <div className="dark-modal"></div>
          <div className="modal-main">
            <div className="modal-header">
              <div className="modal-heading">
                <span>Shooping Cart</span>
              </div>
              <div
                className="modal-cross-icon"
                onClick={() => handleCartClick()}
              >
                X
              </div>
            </div>
            <div className="modal-product-list-container">
              <div className="modal-product-item">
                <div className="modal-image">
                  <img src={data.imageLeft} />
                </div>
                <div className="modal-sneaker-information">
                  <div className="sneaker-information-heading">
                    <div className="modal-brand-name">{data.brand}</div>
                    <div className="item-cross-icon">X</div>
                  </div>
                  <div className="modal-shoe-name">{data.shoeName}</div>
                  <div className="modal-shoe-size">Shoe Size: (UK):6</div>
                  <div className="modal-price-calculation">
                    <div className="modal-price">6,000</div>
                    <div className="price-toggle-container">
                      <button
                        className="toggle-button"
                        onClick={() => handleCounterClick("sub")}
                      >
                        <img src={minusSign} />
                      </button>
                      <div className="no-of-items">{counter}</div>
                      <button
                        className="toggle-button"
                        onClick={() => handleCounterClick("add")}
                      >
                        <img src={addSign} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-product-item">
                <div className="modal-image">
                  <img src={data.imageLeft} />
                </div>
                <div className="modal-sneaker-information">
                  <div className="sneaker-information-heading">
                    <div className="modal-brand-name">{data.brand}</div>
                    <div className="item-cross-icon">X</div>
                  </div>
                  <div className="modal-shoe-name">{data.shoeName}</div>
                  <div className="modal-shoe-size">Shoe Size: (UK):6</div>
                  <div className="modal-price-calculation">
                    <div className="modal-price">6,000</div>
                    <div className="price-toggle-container">
                      <button
                        className="toggle-button"
                        onClick={() => handleCounterClick("sub")}
                      >
                        <img src={minusSign} />
                      </button>
                      <div className="no-of-items">{counter}</div>
                      <button
                        className="toggle-button"
                        onClick={() => handleCounterClick("add")}
                      >
                        <img src={addSign} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-product-item">
                <div className="modal-image">
                  <img src={data.imageLeft} />
                </div>
                <div className="modal-sneaker-information">
                  <div className="sneaker-information-heading">
                    <div className="modal-brand-name">{data.brand}</div>
                    <div className="item-cross-icon">X</div>
                  </div>
                  <div className="modal-shoe-name">{data.shoeName}</div>
                  <div className="modal-shoe-size">Shoe Size: (UK):6</div>
                  <div className="modal-price-calculation">
                    <div className="modal-price">6,000</div>
                    <div className="price-toggle-container">
                      <button
                        className="toggle-button"
                        onClick={() => handleCounterClick("sub")}
                      >
                        <img src={minusSign} />
                      </button>
                      <div className="no-of-items">{counter}</div>
                      <button
                        className="toggle-button"
                        onClick={() => handleCounterClick("add")}
                      >
                        <img src={addSign} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer-section">
              <div className="modal-subtotal-section">
                <div className="modal-sub-total-heading">SUB TOTAL</div>
                <div className="modal-sub-total-price">{totalPrice}</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CartModal;
