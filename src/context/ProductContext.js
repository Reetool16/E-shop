import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/search/photos?page=1&query=product&client_id=os6iac-jzaZ8UJixaPpYP8Ek_gSEl-lRadVteDWNJrk"
      )
      .then((response) => {
        if (response.data && Array.isArray(response.data.results)) {
          const mappedProducts = response.data.results.map((item) => ({
            id: item.id,
            name: item.description || "No Name",
            shortDescription: item.alt_description || "No Description",
            image: item.urls.small,
            largeImage: item.urls.regular,
            price: Math.floor(Math.random() * 100) + 10,
            category: "General",
            reviews: [],
          }));
          setProducts(mappedProducts);
          console.log(response.data.results);
        } else {
          console.error("Unexpected response structure:", response.data);
          setProducts([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setProducts([]);
      });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        selectedProduct,
        setSelectedProduct,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
