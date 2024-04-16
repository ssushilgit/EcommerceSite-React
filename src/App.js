import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ProductCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/mens" element={<ProductCategory banner={men_banner} category="men"/>} />
          <Route path="/womens" element={<ProductCategory banner={women_banner} category="women"/>} />
          <Route path="/kids" element={<ProductCategory banner={kids_banner} category="kid"/>} />
          <Route path="/product" element={<Product/>} >
            <Route path="/productID" element={<Product/>} />
          </Route>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<LoginSignup/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default App;
