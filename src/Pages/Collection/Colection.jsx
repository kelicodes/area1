import { useContext, useState, useEffect } from 'react'; 
import "./Collection.css";
import Card from "../../components/Card/Card";
import { shopcontext } from "../../context/Shopcontext"; 
import Spinner from "../../components/Spinner/Spinner";

export default function Collection() {
  const { products, loadingProducts } = useContext(shopcontext);
  const [search, setSearch] = useState("");
  const [mycategory, setMycategory] = useState([]);
  const [sorttype, setSorttype] = useState("relevant");
  const [filteredproduct, setFilteredproduct] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Apply filter whenever products arrive OR filters change
  useEffect(() => {
    let filtered = structuredClone(products);
    if (search) filtered = filtered.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    if (mycategory.length > 0) filtered = filtered.filter((p) => mycategory.includes(p.category));

    // Sort
    switch (sorttype) {
      case "High to low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "Low to high":
        filtered.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }

    setFilteredproduct(filtered);
  }, [products, mycategory, search, sorttype]);

  const togglecategory = (e) => {
    const value = e.target.value;
    setMycategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  if (loadingProducts) return <Spinner />;

  return (
    <div className="collection">
      <h2>Featured <span>Apartments</span></h2>
      <div className="search">
        <input type="text" placeholder="search apartment here" value={search} onChange={(e) => setSearch(e.target.value)} />
        <div className="sort">
          <select onChange={(e) => setSorttype(e.target.value)}>
            <option value="Relevent">Relevant</option>
            <option value="High to low">High to low</option>
            <option value="Low to high">Low to high</option>
          </select>
          <button className="toggle-category-btn" onClick={() => setShowCategories(prev => !prev)}>
            {showCategories ? "Hide Filters" : "Show Filters"}
          </button>
          <div className={`category-wrapper ${showCategories ? 'open' : ''}`}>
            <div className="category">
              <label><input type="checkbox" onChange={togglecategory} value='Single_rooms' /> Single rooms</label>
              <label><input type="checkbox" onChange={togglecategory} value='Bedsitter' /> Bedsitter</label>
              <label><input type="checkbox" onChange={togglecategory} value='one_bedroom' /> 1 bedroom</label>
            </div>
          </div>
        </div>
      </div>
      <div className="colcont">
        {filteredproduct.map((item, index) => (
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
    </div>
  );
}
