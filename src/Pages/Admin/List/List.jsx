import "./List.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Listproducts({ token }) {
  const [list, setList] = useState([]);
  console.log(token)

  // Fetch all products
  const fetchlist = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products/get", {
        headers: { token },
      });

      if (response.data.success) {
      	console.log(response)
        setList(response.data.allproducts || []); // Adjust if backend sends differently
      } else {
        toast.error(response.data.message || "Failed to fetch products");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Remove product by ID
  const removeproduct = async (id) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/products/remove",
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchlist(); // Refresh list after removal
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  

  useEffect(() => {
    fetchlist();
  }, []);

  return (
    <div className="list">
      <h2>ALL PRODUCTS</h2>

      <div className="head">
        <p>Image</p>
        <p>Name</p>
        <p>Price</p>
        <p>Taken</p>
        <p>Remove</p>
      </div>

      <div className="houses">
        {list.map((item, index) => (
          <div key={item._id || index} className="house-row">
            <img src={item.images?.[0]}  />
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>{item.taken ? "Yes" : "No"}</p>
            <p
              className="remove-btn"
              onClick={() => removeproduct(item._id)}
              style={{ cursor: "pointer", color: "red", fontWeight: "bold" }}
            >
              X
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
