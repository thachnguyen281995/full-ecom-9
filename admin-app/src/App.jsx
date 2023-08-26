import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Enquiries from "./pages/Enquiries";
import BlogList from "./pages/BlogList";
import BlogCatList from "./pages/BlogCatList";
import Order from "./pages/Order";
import Customer from "./pages/Customer";
import ColorList from "./pages/ColorList";
import CategoryList from "./pages/CategoryList";
import BrandList from "./pages/BrandList";
import ProductList from "./pages/ProductList";
import AddBlog from "./pages/AddBlog";
import AddBlogCategory from "./pages/AddBlogCategory";
import AddProduct from "./pages/AddProduct";
import AddBrand from "./pages/AddBrand";
import AddColor from "./pages/Addcolor";
import "./App.css";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="tracuu" element={<Enquiries />} />
          <Route path="blog-list" element={<BlogList />} />
          <Route path="blog-category-list" element={<BlogCatList />} />
          <Route path="blog-category" element={<AddBlogCategory />} />
          <Route path="order" element={<Order />} />
          <Route path="khach-hang" element={<Customer />} />
          <Route path="danhsachspham" element={<ProductList />} />
          <Route path ="thuonghieu" element = {<AddBrand/>} />
          <Route path="danhsach-thuonghieu" element={<BrandList />} />
          <Route path="list-danhmuc" element={<CategoryList/>}/>
          <Route path="danhsachspham" element={<ProductList />} />
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="add-color" element={<AddColor />} />
          <Route path="list-color" element={<ColorList />} />
          <Route path="themsanpham" element={<AddProduct />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
