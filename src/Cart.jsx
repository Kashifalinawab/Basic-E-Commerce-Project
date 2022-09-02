import React from "react";
import "./cart.css"


function Cart({ cart }) {


    return (
        <div>
            <div><h1 id="h1Cart">Cart Items</h1></div>
            {
                <div id="12">{cart.map((shop) => {
                    return (<div id="mainCartDiv">
                        <div id="imageCartDiv">
                            <img src={shop.image} alt="Cart Products" id="imageCart" />
                        </div>
                        <div id="infoCartDiv">
                            <ul>

                                <li>
                                    Title: {shop.title}
                                </li>
                                <li>
                                    Price: {shop.price} {`$`}
                                </li>

                            </ul>
                        </div>

                    </div>)
                })}</div>
            }
        </div >
    )

}


export default Cart;
