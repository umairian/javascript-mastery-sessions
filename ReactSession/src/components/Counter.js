import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0)

    function addHandler() {
        console.log("Add is clicked");
        setCount(count + 1)
    }

    function subtractHandler() {
        console.log("Add is clicked")
        if(count > 0) {
            setCount(count -1)
        }
    }

    function resetHandler() {
        console.log("Add is clicked")
        setCount(0)
    }

    return <div className="counter-div">
        <h1>{count}</h1>
        <button className="add" onClick={addHandler}>ADD</button>
        <button className="subtract" onClick={subtractHandler}>SUBTRACT</button>
        <button className="reset" onClick={resetHandler}>RESET</button>
    </div>
}

export default Counter;