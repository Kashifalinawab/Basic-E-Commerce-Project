import React from "react";
import "./cart.css";
import { IoIosHome } from "react-icons/io";

import { RiDeleteBin5Line } from "react-icons/ri";

import { Link } from "react-router-dom";
import { useState } from "react";

function Cart({ cart }) {
  console.log(cart);
  const [list, setList] = useState(cart);
  console.log("---list---");
  console.log(list);

  // console.log(cart);

  const deleteEvent = (shop) => {
    // alert(shop);
    const newList = list.filter((id) => id !== shop);
    setList(newList);
  };

  return (
    <div id="mCartDiv">
      <div>
        <h1 id="h1Cart">Cart Items</h1>
        <h2 id="h2Cart">
          <Link to="/">
            <IoIosHome />
          </Link>
        </h2>
      </div>
      {
        <div id="beforeMap">
          {list.map((shop) => {
            return (
              <div id="mapCartDiv">
                <h4>Brand: {shop.brand}</h4>
                <div id="imageCartDiv">
                  <img
                    src={shop.thumbnail}
                    alt="Cart Products"
                    id="imageCart"
                  />
                </div>
                <div id="infoCartDiv">
                  <ul>
                    <li>Title: {shop.title}</li>
                    <li>
                      Price: {shop.price} {`$`}
                    </li>
                    <li>
                      Rating:{shop.rating} {`  Out of 5`}
                    </li>
                  </ul>

                  <h3 id="h3">
                    {" "}
                    <button onClick={() => deleteEvent(shop)}>
                      <RiDeleteBin5Line />
                    </button>{" "}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
}

export default Cart;
