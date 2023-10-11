import React, {useState, useEffect} from "react";

function Timer(){
    const [count, setCount] = useState(0);
    useEffect(function(){
        setTimeout(function(){
            setCount((count) => count+=1);
        }, 1000);
    }, []);
    return <h1>Rendering {count}</h1>
}
export default Timer;