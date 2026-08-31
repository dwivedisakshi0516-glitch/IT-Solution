import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import WhyChooseUs from "./pages/WhyChooseUs";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}
