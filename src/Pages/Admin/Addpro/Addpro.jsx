import { useState, useEffect } from "react";
import axios from "axios";
import {toast} from "react-toastify";
import "./Addpro.css";
import { assets } from "../../../assets/assets";


const Addproducts = ({ token }) => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [taken, setTaken] = useState(false);

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);

  const submithandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("desc", desc);
      formData.append("taken", taken);

      if (image1) formData.append("image1", image1);
      if (image2) formData.append("image2", image2);
      if (image3) formData.append("image3", image3);

      const response = await axios.post(
        "https://areaone-4.onrender.com/products/upload",
        formData,
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDesc("");
        setPrice("");
        setCategory("");
        setTaken(false);
        setImage1(null);
        setImage2(null);
        setImage3(null);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
        <form onSubmit={submithandler} className="addproducts">
          <h2>Add Products</h2>

          {/* Image Upload Section */}
          <div className="images">
            <label htmlFor="image1">
              <img
                src={!image1 ? assets.uplaodimg : URL.createObjectURL(image1)}
                alt="Upload 1"
              />
              <input
                type="file"
                id="image1"
                hidden
                onChange={(e) => setImage1(e.target.files[0])}
              />
            </label>

            <label htmlFor="image2">
              <img
                src={!image2 ? assets.uplaodimg : URL.createObjectURL(image2)}
                alt="Upload 2"
              />
              <input
                type="file"
                id="image2"
                hidden
                onChange={(e) => setImage2(e.target.files[0])}
              />
            </label>

            <label htmlFor="image3">
              <img
                src={!image3 ? assets.uplaodimg : URL.createObjectURL(image3)}
                alt="Upload 3"
              />
              <input
                type="file"
                id="image3"
                hidden
                onChange={(e) => setImage3(e.target.files[0])}
              />
            </label>
          </div>

          {/* Name & Price */}
          <div className="namepricecontainer">
            <div className="name conta">
              <p>Product name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Enter apartment name"
                required
              />
            </div>

            <div className="price conta">
              <p>Product price</p>
              <input
                value={price}
                type="number"
                placeholder="Enter house price"
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Category */}
          <div className="category">
            <p>House Category</p>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              <option value="Bedsitter">Bedsitter</option>
              <option value="One Bedroom">One Bedroom</option>
              <option value="Single Room">Single Room</option>
            </select>
          </div>

          {/* Description */}
          <div className="desc">
            <p>Enter House description</p>
            <textarea
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              placeholder="Enter description here"
              required
            ></textarea>
          </div>

          {/* Taken Checkbox */}
          <div className="taken">
            <input
              onChange={() => setTaken((prev) => !prev)}
              type="checkbox"
              checked={taken}
              id="taken"
            />
            <label htmlFor="taken">Taken</label>
          </div>

          <button className="mybtn" type="submit">
            Submit
          </button>
        </form>
      )
}

export default Addproducts;
