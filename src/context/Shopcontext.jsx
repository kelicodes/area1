import { createContext, useState, useEffect } from "react";
import { houses } from "../assets/assets";
import {toast} from "react-toastify"
import axios from "axios"

export const shopcontext = createContext();

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
const [loadingProducts, setLoadingProducts] = useState(true);

const fetchmongopro = async () => {
  try {
    const response = await axios.get("https://areaone-4.onrender.com/products/get");
    if (response.data.success) {
      setProducts(response.data.allproducts);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  } finally {
    setLoadingProducts(false); //
  }
};


  useEffect(() => {
    fetchmongopro();
  }, []);
  
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const value = { products,setToken,token,loadingProducts};

  return (
    <shopcontext.Provider value={value}>
      {props.children}
    </shopcontext.Provider>
  );
};

export default ShopContextProvider;
