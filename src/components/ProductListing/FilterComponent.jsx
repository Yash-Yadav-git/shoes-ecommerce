import { useState } from "react";
import "./ProductList.css";
import { productData } from "../../constants/data";
import ProductList from "./ProductList";

const FilterComponent = ({ placeholder, options, value }) => {
  const [rating, setRating] = useState(2.5)
  return (
    <div className="wrapper">
      <header className="filter-heading">
        <span>Filters</span>
        <button className="reset-button">Reset</button>
      </header>
      {/* Price */}
      <div className="filter-box price-filter">
        <p>Price:</p>
        <div className="filter-input-wrapper">
          <input type="radio" id="below-5000" name="below-5000" value="radio" />
          <label for="below-5000">Below 5000</label>
        </div>
        <div className="filter-input-wrapper">
          <input type="radio" id="5000-10000" name="below-5000" value="radio" />
          <label for="5000-1000">5000 - 10000</label>
        </div>
        <div className="filter-input-wrapper">
          <input type="radio" id="5000-10000" name="below-5000" value="radio" />
          <label for="10000-15000">10000 - 15000</label>
        </div>
        <div className="filter-input-wrapper">
          <input type="radio" id="below-5000" name="below-5000" value="radio" />
          <label for="above-15000">Above 15000</label>
        </div>
      </div>
      {/* Rating Range */}
      <div className="filter-box slideConatiner">
        <p>User Rating : { rating}</p>
        <input type="range" min={1} max={5} value={rating} className="slider" step={1} onChange={(e) => setRating(e.target.value)} />
        <div className="rating-heading">
          <p>0</p>
          <p>2.5</p>
          <p>5</p>
        </div>
      </div>

      <div className="filter-box brand-filter">
        <p>Brand</p>
        <div className="filter-input-wrapper">
          <input type="checkbox" id="below-5000" name="below-5000" value="checkbox" />
          <label for="below-5000">Nike Air</label>
        </div>
        <div className="filter-input-wrapper">
          <input type="checkbox" id="5000-10000" name="below-5000" value="checkbox" />
          <label for="5000-1000">Adidas Originals</label>
        </div>
        <div className="filter-input-wrapper">
          <input type="checkbox" id="5000-10000" name="below-5000" value="checkbox" />
          <label for="10000-15000">Converse</label>
        </div>
        <div className="filter-input-wrapper">
          <input type="checkbox" id="below-5000" name="below-5000" value="checkbox" />
          <label for="above-15000">Jordan</label>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
