import React from "react";
import { useState, useEffect } from "react";

function Clickcounting() {
    const [count, setCount] = useState(0)


    ////useEffect Use are bellow: 
    useEffect(() => {
        document.title = `You Click Count is ${count}`
    })
    /////////////////////



    return (
        <div id="count">
            <h3>
                This is your Button-Click {count} on the Screen
            </h3>
            <button onClick={() => { setCount(count + 1) }}>Add Click Counting</button>
            <button onClick={() => { setCount(count - 1) }}>Subtract Click Counting</button>
            <button onClick={() => { setCount(0) }}>Reset Counting</button>
        </div>
    )
}
export default Clickcounting;
