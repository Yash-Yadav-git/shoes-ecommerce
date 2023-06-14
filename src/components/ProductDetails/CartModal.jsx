import addSign from "../../assests/Cart/plus-svgrepo-com.svg";
import minusSign from "../../assests/Cart/minus-svgrepo-com.svg";
import CancelSign from "../../assests/Cart/cancel.png";
import "./CartModal.css";
import { useEffect, useState } from "react";
import { useCartStore } from "../../redux/features/cart/cartSlice";

const CartModal = ({ showCart, handleCartClick, data }) => {
  const { price } = data;
  const [counter, setCounter] = useState(1);
  const [error, setError] = useState("");
  const [totalPrice, setTotalPrice] = useState(data.price);
  const { cartItems, updateQuantityAdd, updateQuantitySub } = useCartStore();

  const findItem = (id) => cartItems.find((x) => x.id === id);

  const handleQuantitySub = (index) => {
    if (cartItems[index].quantity === 1) {
      setError("Atleast one item should be there in cart");
      return;
    }
    updateQuantitySub(index);
    setCounter((prev) => prev - 1);
  };

  const handleQuantityAdd = (index) => {
    if (cartItems[index].quantity >= 6) {
      setError("You can oly add 6 items");
      return;
    }
    updateQuantityAdd(index);
    setCounter((prev) => prev + 1);
  };

  useEffect(() => {
    const calculatePrice = () => {
      const summationPriceValue = cartItems
        .map((x) => x.price * x.quantity)
        .reduce(
          (previousValue, currentValue) => currentValue + previousValue,
          0
        );
      setTotalPrice(summationPriceValue);
    };
    calculatePrice();
  }, [counter]);

  return (
    <>
      <div className="modal-container">
        <div className="dark-modal"></div>
        <div className="modal-main">
          <div className="modal-header">
            <div className="modal-heading">
              <span>Shooping Cart</span>
            </div>
            <div className="modal-cross-icon" onClick={() => handleCartClick()}>
              X
            </div>
          </div>
          <div className="modal-product-list-container">
            {cartItems.map((item, index) => (
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
                        onClick={() => handleQuantitySub(index)}
                      >
                        <img src={minusSign} />
                      </button>
                      <div className="no-of-items">
                        {findItem(item.id).quantity}
                      </div>
                      <button
                        className="toggle-button"
                        onClick={() => handleQuantityAdd(index)}
                      >
                        <img src={addSign} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="modal-footer-section">
            <div className="modal-subtotal-section">
              <div className="modal-sub-total-heading">SUB TOTAL</div>
              <div className="modal-sub-total-price">{totalPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
