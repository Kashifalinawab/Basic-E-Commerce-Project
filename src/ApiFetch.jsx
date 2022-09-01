import React from "react";
import { useState, useEffect } from "react";
import "./cart.css"
import { GiShoppingCart } from "react-icons/gi";
import { Routes, Route, Link, } from "react-router-dom"
import Cart from "./Cart";



function ApiFetch() {

    ///// Below Line No 14-15 indicate the state which are going to change

    const [products, getProducts] = useState([])
    const [cart, setCart] = useState([])


    //// Below useEffect function For Fetching the Api From Server (Line No 20 to 26)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((Response) => Response.json())
            .then((data) => {
                getProducts(data)
            })
    }, [])






    return (<div id="mainCart">

        {/* Below carIconDiv is to displace the cart icon on topside of bowser (I used nmp installation for react icon installing  fron React Icon website) */}

        <div id="cartIconDiv" ><h1 id="webSiteName">Shopping Website</h1>
            {/* Below use of Link to Link the cart icon to next "Cart" Page where items is added */}
            <Link to="/Cart">
                <h1 id="cartIcon"><GiShoppingCart /></h1>
            </Link>

            {/* Below Use of Routes and Route to connect the "Cart" page and i am given the Cart call element a props to acesse the added items in "Cart Page"
 --> look  this part {<Cart car={cart}/>}  */}
            <Routes> <Route path="Cart" element={<Cart cart={cart} />} /></Routes>


        </div>
        <div id="mapDiv">{
            // use of map to render all products line No 50 to 75
            products.map((product) => {
                return (
                    <div id="parentDiv" key={product.id}>
                        <h4 id="h4Id">Product No: {product.id}</h4>
                        <div id="imageDiv">
                            <img src={product.image} alt="Cart Products" id="image" />
                        </div>
                        <div id="info">
                            <ul id="data">
                                <li>
                                    Category: {product.category}
                                </li>
                                <li>
                                    Title: {product.title}
                                </li>
                                <li>
                                    Price: {product.price} {`$`}
                                </li>
                            </ul>
                            <div>
                                {/* below button on click set the select product to Your state"in my code selected items store to {cart} " */}
                                <button id="btn1" onClick={() => setCart((prevState) => [...prevState, product])}>Add</button>
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

