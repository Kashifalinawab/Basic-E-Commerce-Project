import React from "react";
import "./cart.css"


function Cart({ cart }) {
    // <ApiFetch />
    // console.log(cart);

    return (
        <div>
            {
                <div id="12">{cart.map((shop) => {
                    return (<div id="mainCartDiv">
                        <div id="imageCartDiv">
                            <img src={shop.image} alt="Cart Products" id="imageCart" />
                        </div>
                        <div id="infoCartDiv">
                            <li>
                                Title: {shop.title}
                            </li>
                            <li>
                                Price: {shop.price} {`$`}
                            </li>

                        </div>

                    </div>)
                })}</div>
            }
        </div >
    )

}


export default Cart;
