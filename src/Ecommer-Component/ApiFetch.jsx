import React from "react";
import "./cart.css"
import { BsCart4 } from "react-icons/bs";
import { Link, } from "react-router-dom"




function ApiFetch({ products, addeditems }) {


    // console.log(products);

    return (<div id="mainCart">



        <div id="cartIconDiv" ><h1 id="webSiteName">Shopping Website</h1>
            <Link to="/Cart">
                <h1 id="cartIcon"><BsCart4 /></h1>
            </Link>



        </div>
        <div id="mapDiv">
            {products.map((product) => {
                return (
                    <div id="parentDiv" key={product.id}>
                        <h4 id="h4Id">Product No: {product.id}</h4>
                        <div id="imageDiv">
                            <img src={product.thumbnail} alt="Cart Products" id="image" />
                        </div>
                        <div id="info">
                            <ul id="data">
                                <li>
                                    Category: {product.category}
                                </li>
                                <li>
                                    Brand: {product.brand}
                                </li>
                                <li>
                                    Title: {product.title}
                                </li>
                                <li>
                                    Price: {product.price} {`$`}
                                </li>
                                <li>
                                    Rating:{product.rating} {`  Out of 5`}
                                </li>
                            </ul>
                            <div>

                                <button id="btn1" onClick={() => addeditems(product)}>Add</button>
                            </div>
                        </div>
                    </div >
                )
            })
            }
        </div>
    </div>)



}


export default ApiFetch;

