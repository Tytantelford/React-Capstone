import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import HomePage from "./components/pages/HomePage";
import ContactPage from "./components/pages/ContactPage";
import AboutPage from "./components/pages/AboutPage";
import CartPage from "./components/pages/CartPage";
import ProductsPage from "./components/pages/ProductsPage";
import SingleProductPage from "./components/pages/SingleProductPage";
import "./components/styles/main.scss";

function App() {
  const [myShoppingCart, setMyShoppingCart] = useState({});

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/products"
              render={() => (
                <ProductsPage
                  myShoppingCart={myShoppingCart}
                  setMyShoppingCart={setMyShoppingCart}
                />
              )}
            />
            <Route
              path="/products/:productId"
              render={(props) => (
                <SingleProductPage
                  {...props}
                  myShoppingCart={myShoppingCart}
                  setMyShoppingCart={setMyShoppingCart}
                />
              )}
            />
            <Route
              exact
              path="/cart"
              render={() => (
                <CartPage
                  myShoppingCart={myShoppingCart}
                  setMyShoppingCart={setMyShoppingCart}
                />
              )}
            />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
        </main>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
}
export default App;
