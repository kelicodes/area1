import "./Featured.css";
import Card from "../Card/Card";
import { useState, useEffect, useContext } from "react";
import { shopcontext } from "../../context/Shopcontext";
import { Link } from "react-router-dom";

export const Featured = () => {
  const { products } = useContext(shopcontext);
  const [masproducts, setMasproducts] = useState([]);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (products.length > 0) {
      setMasproducts(products.slice(2, 5)); // pick featured products
      setFadeIn(true); // trigger fade-in
    }
  }, [products]);

  return (
    <div className={`Featured ${fadeIn ? "fade-in" : ""}`}>
      <h3>
        Featured <span>Apartments</span>
      </h3>
      <div className="Feature">
        {masproducts.map((item, index) => (
          <Card
            id={item._id}
            image={item.images[0]}
            key={index}
            name={item.name}
            price={item.price}
            desc={item.desc}
            category={item.category}
            taken={item.taken}
          />
        ))}
      </div>

      <Link to="/collection">
        <button className="feabtn">See All Apartments</button>
      </Link>
    </div>
  );
};

export default Featured;
