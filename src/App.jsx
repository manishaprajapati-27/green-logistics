import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Footer from "./layout/Footer";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import OurServices from "./pages/OurServices";
import ServicesDetail from "./pages/ServicesDetail";
import Product from "./pages/Product";
import Cursor from "./components/Cursor";
import BlogDetails from "./pages/BlogDetails";
import ProductDetails from "./pages/ProductDetails";
import Gallery from "./pages/Gallery";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {

  return (
    <>
    <Cursor/>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/services-detail" element={<ServicesDetail />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
