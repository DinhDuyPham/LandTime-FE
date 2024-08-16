import "./App.css";
import Cart from "./customer/component/Cart/Cart";
import Checkout from "./customer/component/Checkout/Checkout";
import Footer from "./customer/component/Footer/Footer";
import Navigation from "./customer/component/Navigation/Navigation";
import Product from "./customer/component/Product/Product";
import ProductDetails from "./customer/component/ProductDetails/ProductDetails";

import HomePage from "./customer/pages/HomePage/HomePage";

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
         {/* <HomePage />
        <Product /> 
        <ProductDetails/> */}
        {/* <Cart/> */}
      <Checkout/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
