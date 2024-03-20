import Category from "./Category/Category";
import Price from "./Price/Price";
import "./Sidebar.css";
import {Link} from "react-router-dom";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <Link to="/">
          <h1>🛒</h1>
          </Link>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
