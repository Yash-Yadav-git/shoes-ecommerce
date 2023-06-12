import { useState } from "react";
import FilterComponent from "../../components/ProductListing/FilterComponent";
import ProductList from "../../components/ProductListing/ProductList";
import { productData } from "../../constants/data";
import '../../components/ProductListing/ProductList.css'


const ProductLists = () => {
  
  return (
    <div className="product-list-conatiner">
      <div className='filter-component'>
        <FilterComponent />
      </div>
      <div className="filter-product-container">
        <div className="filter-product-list">
      {productData.map((product)=>(<ProductList data={product} />))}
        </div>
      </div>
    </div>
  );
};

export default ProductLists;
