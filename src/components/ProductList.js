// src/components/ProductList.js
import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductImage = styled.img`
  height: 200px;
  object-fit: cover;
`;

const ProductList = () => {
  const { products, searchQuery, setSearchQuery } = useContext(ProductContext);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-list">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="product"
            >
              <ProductImage src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.shortDescription}</p>
              <p>${product.price}</p>
            </Link>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
