import { BsFillBagFill } from "react-icons/bs";
import {ShopContext} from "../context/shop_context";
import {useContext} from "react";

const Card = ({ id,img, title, star, reviews, prevPrice, newPrice, genre, category,description }) => {
  const {addToCart, cartItems} = useContext(ShopContext)
  const cartItemCount = cartItems[id];

  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <h3 style={{fontSize: 15 }}>{genre}</h3>
          <h3 style={{fontSize: 13, fontWeight: "normal"}}>{description}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del>
              {'          ' + '$'}{newPrice}
            </div>
            <button className="bag" onClick={() => addToCart(id)}>
              <BsFillBagFill className="bag-icon"/>
              {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
