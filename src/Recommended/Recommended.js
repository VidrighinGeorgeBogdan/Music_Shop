import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Rap" title="Rap" />
          <Button onClickHandler={handleClick} value="Trap" title="Trap" />
          <Button onClickHandler={handleClick} value="Rock" title="Rock" />
          <Button onClickHandler={handleClick} value="Punk" title="Punk" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
