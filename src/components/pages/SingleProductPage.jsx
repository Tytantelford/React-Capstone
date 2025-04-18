import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProductPage({ myShoppingCart, setMyShoppingCart }) {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error!", err));
  }, [productId]);

  const addToCart = () => {
    setMyShoppingCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[product.id]) {
        updatedCart[product.id] += 1;
      } else {
        updatedCart[product.id] = 1;
      }
      return updatedCart;
    });
  };

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="single-product-page">
      <img className="image" src={product.image} alt={product.title} />
      <h1 className="title">{product.title}</h1>
      <p className="description">{product.description}</p>
      <p className="price">Price: ${product.price}</p>
      <button className="single-product-button" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default SingleProductPage;
