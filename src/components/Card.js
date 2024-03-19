import { BsFillBagFill } from "react-icons/bs";
import {ShopContext} from "../context/shop_context";
import {useContext} from "react";

const Card = ({ id,img, title, star, reviews, prevPrice, newPrice }) => {
  const {addToCart, cartItems} = useContext(ShopContext)
  const cartItemCount = cartItems[id];

  return (
    <>
      <section onClick={() => {
        addToCart(id)
      }} className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <button className="bag" onClick={() => addToCart(id)}>
              Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>} >
              <BsFillBagFill className="bag-icon" />
            </button>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
