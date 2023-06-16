/** @format */

import React from "react";
import "./SingleProduct.css";
import useFetch from "../servives/useFetch";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import PageNotFound from "./PageNotFound";
import Carousel from "./Carousel";



function SingleProduct(props) {
  let { id } = useParams();
  const { data: data, error, isLoading } = useFetch(`products/${id}`);
  const navigate = useNavigate();
  //console.log("one product", data);

  if (isLoading) return <Spinner />;
  if (!data) return <PageNotFound />;
  if (error) throw error;
  let product = data.product;
  return (
    <div className="single-product">
      <div className="product-container">
        <img src={product.imageURL} alt={product.name} />
        <div className="product-detail">
          <h3>{product.name}</h3>
          <hr />
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          <button
            disabled={product.quantity < 1}
            className="btn btn-primary"
            onClick={() => {
              props.addToCart(id);
              navigate("/cart");
            }}
          >
            Add to cart
          </button>
          {product.quantity < 1 && <p className="out-of-stock">Out of stock</p>}
        </div>
      </div>
      <p>Similar Items You Might Like</p>
      <Carousel category={product.category}/>
      
     
    </div>
  );
}

export default SingleProduct;
