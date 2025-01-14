import './App.css';
import Cart from './costumer/components/Cart/Cart.jsx';
import Checkout from './costumer/components/Checkout/Checkout.jsx';
import Footer from './costumer/components/Footer/Footer.jsx';
import Navigation from './costumer/components/Navigation/Navigation.jsx';
import Product from './costumer/components/Product/Product.jsx';
import ProductDetails from './costumer/components/ProductDetails/ProductDetails.jsx';
import HomePage from './costumer/Pages/HomePage/HomePage.jsx';



function App() {
  return (
    <div className="">
      <Navigation></Navigation>
      <div>
        {/* <HomePage/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        <Checkout/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
