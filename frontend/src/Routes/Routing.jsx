import { Route, Routes } from "react-router-dom";
import Home from "../Components/Pages/HomePage/Home";
import ScrollToTop from "./ScrollToTop";
import Blog from "../Components/Pages/BlogPage/Blog";
import Contact from "../Components/Pages/ContactPage/Contact";
import Products from "../Components/Pages/ProductPage/Products";
import Knowledge from "../Components/Pages/KnowledgePage/Knowledge";
import SignUp from "../Components/Pages/SignupPage/SignUp";
import Login from "../Components/Pages/LoginPage/Login";
import Registration from "../Components/Pages/Registration/Registration";
import Privacy from "../Components/Pages/FooterPage/Privacy";
import Terms from "../Components/Pages/FooterPage/Terms";
import jwtDecode from 'jwt-decode';
import { useEffect } from "react";

const Routing = () => {
  useEffect(() => {
    checkTokenExpiration();
  }, []);

  const checkTokenExpiration = () => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const { exp } = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (exp < currentTime) {
          localStorage.removeItem('token');
          console.log("Token has expired, removed from local storage.");
          window.location.reload();
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem('token');
        window.location.reload();
      }
    }
  };


  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/create-user" element={<SignUp />} />
        <Route path="/privacy&policy" element={<Privacy />} />
        <Route path="/terms&conditions" element={<Terms />} />
        <Route path="/login-user" element={<Login />} />
      </Routes>
    </>
  );
};

export default Routing;
