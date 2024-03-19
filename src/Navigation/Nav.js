import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search for music ..."
        />
      </div>
      <div className="profile-container">
        <Link to="/cart">
          <AiOutlineShoppingCart className="nav-icons" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
