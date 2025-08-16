import { Link } from 'react-router-dom';
import "./Card.css";

export const Card = (props) => {
  return (
    <div className="card">
      <Link to={`/collection/${props.id}`} className="card-link">
        <img src={props.image} alt={props.name} />
        
        <p className="name">{props.name}</p>

        <div className="cardcate">
          <p className="category">{props.category}</p>
          <p className="price">{props.price}</p>
        </div>

        <div className="buttons">
          <a href="#" className="inqure">Inquire More</a>
          <button className="btn">Book Hostel</button>
        </div>
      </Link>
    </div>
  );
};

export default Card;
