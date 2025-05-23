import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ShopContextProvider} from "./context/shop_context";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products, {data} from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import {Cart} from "./cart/cart"
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {

      setQuery(event.target.innerHTML);
  };


  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );


    // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

      // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, genre, newPrice, title }) =>
          category === selected ||
          color === selected ||
          genre === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    //filteredProducts = products;

    return filteredProducts.map(
      ({ id,img, title, star, reviews, prevPrice, newPrice,genre,category,description }) => (
        <Card
          id={id}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          genre={genre}
          category={category}
          description={description}
        />

      )
    );
      console.log('abcd');

  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>

      <ShopContextProvider>
          <Router>
          <Sidebar handleChange={handleChange} />
          <Navigation query={query} handleInputChange={handleInputChange} />
          <Routes>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/" element={<><Recommended handleClick={handleClick} />
                                    <Products result={result} /> < />}/>
          </Routes>
          </Router>
      </ShopContextProvider>

    </>
  );
}

export default App;
