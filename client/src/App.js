import React, { useState } from "react";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import data from "./data.json";


function App() {
  const [products, setProducts] = useState(data);
  
  const [pricesort, setPriceSort] = useState("");
  const [sizesort, setSizeSort] = useState("");

  const handlePriceSort = (e) => {
    let order=e.target.value;
    setPriceSort(order);
    if(order === "All"){
      setPriceSort(data);
    }
    else {
      let productClone = [...products];
      let newProducts = productClone.sort(
        function (a,b){
          if(order ==="Lowest"){
            return a.price -b.price;
          }
          else if(order ==="Highest"){
            return b.price-a.price ;
          }
        }
      );
      setProducts(newProducts);
    }
  }
  const handleSizeSort = (e) => {
    let newvalue=e.target.value;
    setSizeSort(newvalue);
    if(newvalue === "All"){
      setSizeSort(data);
    }
    else {
      let productClone = [...products];
      let newProducts = productClone.filter(
        p => p.sizes.indexOf(newvalue) !== -1
      );
      setProducts(newProducts);
    }
  }

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
            <Products products={products}/>
            <Filter 
              sizesort={sizesort}
              pricesort={pricesort}
              handleSizeSort={handleSizeSort}
              handlePriceSort={handlePriceSort} 
            />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
