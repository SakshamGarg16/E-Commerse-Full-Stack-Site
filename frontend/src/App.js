import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './costumer/components/Cart/Cart.jsx';
import Checkout from './costumer/components/Checkout/Checkout.jsx';
import Footer from './costumer/components/Footer/Footer.jsx';
import Navigation from './costumer/components/Navigation/Navigation.jsx';
import Order from './costumer/components/Order/Order.jsx';
import OrderDetail from './costumer/components/Order/OrderDetail.jsx';
import Product from './costumer/components/Product/Product.jsx';
import ProductDetails from './costumer/components/ProductDetails/ProductDetails.jsx';
import HomePage from './costumer/Pages/HomePage/HomePage.jsx';
import CostumerRouter from './Router/CostumerRouter.jsx';



function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CostumerRouter/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
