import React, { useEffect, useState } from "react";
import "../styles/cartpage.scss";

function CartPage({ myShoppingCart, setMyShoppingCart }) {
  const [allOfTheProducts, setAllOfTheProducts] = useState([]);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  useEffect(() => {
    const getAllProductsFromApi = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const productsData = await response.json();
      setAllOfTheProducts(productsData);
    };

    getAllProductsFromApi();
  }, []);

  const listOfCartItems = Object.entries(myShoppingCart).map(
    ([productId, productQuantity]) => {
      const matchingProduct = allOfTheProducts.find(
        (productObject) => productObject.id === parseInt(productId)
      );

      if (matchingProduct) {
        return (
          <div key={productId}>
            <h3>{matchingProduct.title}</h3>
            <p>Price: ${matchingProduct.price}</p>
            <p>Quantity: {productQuantity}</p>
            <hr />
          </div>
        );
      } else {
        return null;
      }
    }
  );

  const subtotal = () => {
    let subtotalValue = 0;

    for (let productId in myShoppingCart) {
      const productQuantity = myShoppingCart[productId];

      const product = allOfTheProducts.find((productItem) => {
        return productItem.id === parseInt(productId);
      });

      if (product) {
        subtotalValue += product.price * productQuantity;
      }
    }

    return subtotalValue;
  };

  const shippingCost = 4.99;
  const totalPrice = subtotal() + shippingCost;

  const submitOrderButton = () => {
    setMyShoppingCart({});
    setOrderConfirmed(true);
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {orderConfirmed ? (
        <p className="order-confirmed">✅ Order confirmed!</p>
      ) : (
        <>
          {listOfCartItems.length > 0 && listOfCartItems}
          {listOfCartItems.length === 0 && (
            <p>You have nothing in your cart right now.</p>
          )}
          <p>Shipping $4.99</p>
          <p>Total: ${totalPrice.toFixed(2)}</p>
          <button onClick={submitOrderButton}>Submit order</button>
        </>
      )}
    </div>
  );
}

export default CartPage;
