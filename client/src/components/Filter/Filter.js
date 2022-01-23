import React from 'react';
import "../../css/Filter/Filter.css";

function Filter(props) {
    return (
        <div className="filter-wrapper">
            <h2 className="filter-title"> Filter </h2>
            <div className="num-of-products">Number of Products 4 </div>
            <div className="filter-by-size">
                <span>Filter</span>
                <select value={props.sizesort} className="filter-select" onChange={props.handleSizeSort}>
                    <option value="All">All</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                </select>
            </div>
            <div className="filter-by-price">
                <span>Price</span>
                <select value={props.pricesort} className="filter-select" onChange={props.handlePriceSort}>
                    <option value="Highest">Highest</option>
                    <option value="Lowest">Lowest</option>
                </select>
            </div>
        
        
        </div>
    );
}

export default Filter;
