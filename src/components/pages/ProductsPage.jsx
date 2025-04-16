import React, { useState, useEffect } from "react";

function ProductsPage({ myShoppingCart, setMyShoppingCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error getting data:", error));
  }, []);

  const addToCart = (productId) => {
    const newCart = { ...myShoppingCart };
    if (!newCart[productId]) {
      newCart[productId] = 1;
    }
    setMyShoppingCart(newCart);
  };

  const addQuantity = (productId) => {
    const newCart = { ...myShoppingCart };
    if (!newCart[productId]) {
      newCart[productId] = 1;
    } else {
      newCart[productId] += 1;
    }
    setMyShoppingCart(newCart);
  };

  const minusQuantity = (productId) => {
    const newCart = { ...myShoppingCart };
    if (newCart[productId] > 1) {
      newCart[productId] -= 1;
    }
    setMyShoppingCart(newCart);
  };

  return (
    <div>
      <h1>Products</h1>

      <div className="product-cards">
        {products.length === 0 ? (
          <p>Loading...</p>
        ) : (
          products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <button onClick={() => addToCart(product.id)}>Add to Cart</button>
              <div className="quantity-controls">
                <button onClick={() => minusQuantity(product.id)}>-</button>
                <span>{myShoppingCart[product.id] || 0}</span>
                <button onClick={() => addQuantity(product.id)}>+</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductsPage;
