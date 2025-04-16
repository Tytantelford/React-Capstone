import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./Header";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import HomePage from "./components/pages/HomePage";
import ContactPage from "./components/pages/ContactPage";
import AboutPage from "./components/pages/AboutPage";
import CartPage from "./components/pages/CartPage";
import ProductsPage from "./components/pages/ProductsPage";

import "./components/styles/main.scss";

function App() {
  const [myShoppingCart, setMyShoppingCart] = useState({});

  return (
    <Router>
      <Header />
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
      <Footer />
    </Router>
  );
}

export default App;
