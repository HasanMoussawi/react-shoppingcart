import React from 'react';
import "../../css/Cart/Cart.css";

function Cart(props) {
  return (
    <div className="cart-wrapper">
        <div className="cart-title">{
            props.cartItems.length === 0 ? "Cart is Empty" : 
            <p> There is {props.cartItems.length} product(s) in cart</p> 
        }</div> 
        <div className="cart-items">
                {props.cartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                    <img src={item.imageurl} alt={item.title} />
                    <div className="cart-info">
                        <div>
                            <p>Title: {item.title}</p>
                            <p>Quantity: {item.qty}</p>
                            <p>Price: ${item.price}</p>
                        </div>
                    <button onClick={() => props.removeFromCart(item)}>Remove</button>
                    </div>
                    </div>
                ))}
        </div>
    </div>   
    );
}

export default Cart;
