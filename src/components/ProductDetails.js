import React, { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { products, setSelectedProduct, selectedProduct } =
    useContext(ProductContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const product = products.find((product) => product.id === id);
    setSelectedProduct(product);
  }, [id, products, setSelectedProduct]);

  if (!selectedProduct) return <p>Loading...</p>;

  return (
    <div className="product-details">
      <button onClick={() => navigate("/")} className="back-button">
        Back to List
      </button>
      <img
        src={selectedProduct.image}
        alt={selectedProduct.name}
        className="large-image"
      />
      <h1>{selectedProduct.name}</h1>
      <p>{selectedProduct.shortDescription}</p>
      <p>
        <strong>Price: </strong>${selectedProduct.price}
      </p>
      <p>
        <strong>Category: </strong>
        {selectedProduct.category}
      </p>
      <div className="reviews">
        <h2>Reviews:</h2>
        {selectedProduct.reviews.length > 0 ? (
          selectedProduct.reviews.map((review, index) => (
            <div key={index} className="review">
              <p>
                <strong>{review.author}</strong>: {review.content}
              </p>
            </div>
          ))
        ) : (
          <p>No reviews available</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
