import "./Product.css";
import { useState, useEffect, useContext } from 'react';
import { shopcontext } from "../../context/Shopcontext";
import { useParams } from 'react-router-dom';
import Spinner from "../spinner/spinner";

export default function Product() {
    const { productid } = useParams();
    const { products } = useContext(shopcontext);
    const [theproduct, setTheproduct] = useState();
    const [theimage, setTheimage] = useState();
    const [fade, setFade] = useState(false);
    const [loading,setLoading]=useState(true)

    const changeImage = (img) => {
        setFade(true);
        setTimeout(() => {
            setTheimage(img);
            setFade(false);
        }, 300);
    };


    useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

    useEffect(() => {
        const foundProduct = products.find(item => item._id === productid);
        if (foundProduct) {
            setTheproduct(foundProduct);
            setTheimage(foundProduct.images[0]);
        }
    }, [productid, products]);

    return ( loading ? <Spinner/> :
        <div className="product">
            <h2>LISTED <span>APARTMENT</span></h2>

            {theproduct ? (
                <div className="midnight">
                    <div className="imagecontainer">
                        <div className="image">
                            <img src={theimage} className={fade ? "fade-out" : ""} alt={theproduct.name} />
                        </div>
                        <div className="images">
                            {theproduct.images.map((item, index) => (
                                <img
                                    src={item}
                                    key={index}
                                    onClick={() => changeImage(item)}
                                    className={theimage === item ? "active" : ""}
                                    alt={`Thumbnail ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="productinfo">
                        <p>{theproduct.name}</p>
                        <div className="catpr">
                            <p className="pri">{theproduct.price}</p>
                            <p>{theproduct.category}</p>
                        </div>
                        <p>{theproduct.desc}</p>
                        <div className="probtn">
                            <button className="secondary">Enquire more</button>
                            <button className="btn">Book Apartment</button>
                        </div>
                    </div>
                </div>
            ) : (
                <Spinner />
            )}
        </div>
    );
}
