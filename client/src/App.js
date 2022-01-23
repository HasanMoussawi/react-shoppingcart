import React, { useState, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import data from "./data.json";


function App() {
  const [products, setProducts] = useState(data);
  const [pricesort, setPriceSort] = useState("");
  const [sizesort, setSizeSort] = useState("");
  const [cartItems, setCartItems] = useState( JSON.parse(localStorage.getItem("cartItems")) || []);

  const handlePriceSort = (e) => {
    let order=e.target.value;
    setPriceSort(order);
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

  const handleSizeSort = (e) => {
    let newvalue=e.target.value;
    setSizeSort(newvalue);
    if(newvalue === "All"){
      setProducts(data);
      console.log(sizesort);
    }
    else {
      let productClone = [...products];
      let newProducts = productClone.filter(
        p => p.sizes.indexOf(newvalue) !== -1
      );
      setProducts(newProducts);
    }
  }

  const addToCart = (product) => {
    const cartItemsClone = [...cartItems];
    let isProductExist = false;
    cartItemsClone.forEach(p => {
      if(p.id === product.id){
        p.qty++;
        isProductExist =true;
      }
    })
    if(!isProductExist){
      cartItemsClone.push({...product, qty:1});
    }
    setCartItems(cartItemsClone);
  }

  const removeFromCart = (product) => {
    const cartItemsClone = [...cartItems];
    setCartItems(cartItemsClone.filter(p => p.id !== product.id));
  }

  useEffect (() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
            <Products products={products} addToCart={addToCart}/>
            <Filter 
              productQuantity={products.length}
              sizesort={sizesort}
              pricesort={pricesort}
              handleSizeSort={handleSizeSort}
              handlePriceSort={handlePriceSort} 
            />
        </div>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
