import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import HotSale from './components/HotSale/ProductHotSale';
import OurStore from './pages/OurStore/OurStore';
import ResetPassword from './components/ResetPassword';
import BlogSingle from './pages/BlogSingle';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy/ShippingPolicy';
import TermAndContions from './pages/TermAndContion/TermAndContions';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogSingle/>}/>
          <Route path='cart' element = {<Cart/>} />
          <Route path="/checkout" element = {<Checkout/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="product" element={<OurStore />} />
          <Route path='product/:id' element={<SingleProduct/>} />
          <Route path="hotsale" element={<HotSale />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path='privacy-policy' element={<PrivacyPolicy/>} />
          <Route path='refund-policy' element={<RefundPolicy/>} />
          <Route path='shipping-policy' element={<ShippingPolicy/>} />
          <Route path='term-contions' element={<TermAndContions/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
