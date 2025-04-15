import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import ProductsPage from "./ProductsPage";
import Footer from "./Footer";
import CartPage from "./CartPage";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";

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
