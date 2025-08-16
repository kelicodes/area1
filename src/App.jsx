import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Collection from "./Pages/Collection/colection";
import Product from "./Components/product/product";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Addproducts from "./Pages/Admin/Addpro/Addpro";
import { ToastContainer } from "react-toastify";
import { shopcontext } from "./context/Shopcontext";
import "react-toastify/dist/ReactToastify.css";
import Adminhome from "./Pages/admin/adminhome/adminhome"
import "./App.css";

function App() {
  const { token } = useContext(shopcontext);

  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/collection/:productid" element={<Product />} />
          <Route path="/login" element={<Login />} />

          {/* ✅ Admin-protected Addproducts route */}
          <Route
            path="/admin"
            element={
              localStorage.getItem("role") === "admin" ? (
                <Adminhome token={token} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </main>
      <Footer />

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
