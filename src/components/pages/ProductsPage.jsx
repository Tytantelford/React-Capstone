import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductsPage({ myShoppingCart, setMyShoppingCart }) {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState({});
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error!", error));
  }, []);

  const addToCart = (productId) => {
    const newCart = { ...myShoppingCart };
    const productQuantity = quantity[productId] || 0;

    if (productQuantity > 0) {
      if (!newCart[productId]) {
        newCart[productId] = productQuantity;
      } else {
        newCart[productId] += productQuantity;
      }

      setMyShoppingCart(newCart);
    }
  };

  const addQuantity = (productId) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: (prevQuantity[productId] || 0) + 1,
    }));
  };

  const minusQuantity = (productId) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: Math.max((prevQuantity[productId] || 0) - 1, 0),
    }));
  };

  const sortButton = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);

    const sortedProducts = [...products].sort((a, b) => {
      if (newSortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setProducts(sortedProducts);
  };

  return (
    <div>
      <h1>Products</h1>

      <button className="sort-button" onClick={sortButton}>
        Sort by Price: {sortOrder === "asc" ? "Low to High" : "High to Low"}
      </button>

      <div className="product-cards">
        {products.length === 0 ? (
          <p>Loading...</p>
        ) : (
          products.map((product) => (
            <div className="product-card" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.title} />
              </Link>
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <div>
                <button onClick={() => minusQuantity(product.id)}>-</button>
                <span>{quantity[product.id] || 0}</span>{" "}
                <button onClick={() => addQuantity(product.id)}>+</button>
              </div>
              <button onClick={() => addToCart(product.id)}>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductsPage;
