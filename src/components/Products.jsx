/** @format */

import React, { useState } from "react";
import "./Products.css";
import useFetch from "../servives/useFetch";
import Spinner from "./Spinner";
import PageNotFound from "./PageNotFound";
import { Link, useParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { buttons } from "../buttons.json";

function Products() {
  const { data: data, error, isLoading } = useFetch("products");
  let { category } = useParams();
  //console.log("data", data)
  const [active, setActive] = useState(category);

  const handleActive = (e) => {
    e.preventDefault();
    setActive(e.target.value);
  };

  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <Link to={`${p.id}`}>
          <img src={p.imageURL} alt={p.name} />
        </Link>
        <p id="product-name">{p.name}</p>
        <p id="product-price">${p.price}</p>
      </div>
    );
  }
  if (error) throw error;
  if (isLoading) return <Spinner />;
  if (data.length === 0) return <PageNotFound />;

  let filterByCategory = [];
  let filter = data.products.filter((product) => product.category === active);
  active === "All" || !active
    ? (filterByCategory = data.products)
    : (filterByCategory = filter);

  return (
    <div className="products">
      <div className="filter-categories">
        {buttons.map((button, idx) => {
          return (
            <button
              key={idx}
              type="button"
              className={
                active === button.name ? "button-active" : "default-style"
              }
              onClick={handleActive}
              value={button.name}
            >
              {button.name}
            </button>
          );
        })}

        <div className="input-wrapper">
          <FaSearch id="search-icon" />
          <input
            className="search"
            placeholder="Type to search"
            type="search"
          />
        </div>
      </div>
      <section id="products">{filterByCategory.map(renderProduct)}</section>
    </div>
  );
}

export default Products;
